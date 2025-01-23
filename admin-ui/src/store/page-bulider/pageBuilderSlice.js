import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  elements: [],
  selectedElement: null,
  history: [],
  currentStep: -1,
};

const getDefaultColumnStyles = () => ({
  // Same default styles as defined in ElementToolbox
  display: "flex",
  flexDirection: "column",
  //flex: "1",
  // ... copy all the default styles ...
});

export const builderSlice = createSlice({
  name: "builder",
  initialState,
  reducers: {
    addElement: (state, action) => {
      if (!Array.isArray(state.elements)) {
        state.elements = [];
      }

      const elementsInSameParentAndColumn = state.elements.filter(
        (el) =>
          el.parentId === action.payload.parentId &&
          el.columnIndex === action.payload.columnIndex
      );

      // If it's a container, initialize column styles
      const elementStyles =
        action.payload.type === "container"
          ? {
              ...action.payload.styles,
              columnStyles: {
                0: getDefaultColumnStyles(), // Default styles for first column
              },
            }
          : action.payload.styles;

      state.elements.push({
        id: Date.now(),
        type: action.payload.type,
        props: {
          ...(action.payload.props || {}),
          content: action.payload.props?.content || "",
        },
        children: [],
        parentId: action.payload.parentId || null,
        columnIndex: action.payload.columnIndex || 0,
        styles: elementStyles,
        order: elementsInSameParentAndColumn.length,
      });
    },
    updateElement: (state, action) => {
      const { id, updates } = action.payload;
      const elementIndex = state.elements.findIndex((el) => el.id === id);

      if (elementIndex === -1) return;

      // Create a safe copy of the current element
      const element = JSON.parse(JSON.stringify(state.elements[elementIndex]));

      // Handle column updates
      if (updates.props?.columns !== undefined) {
        const newColumns = updates.props.columns;

        // Ensure we have a styles object
        element.styles = element.styles || {};
        element.styles.columnStyles = element.styles.columnStyles || {};

        // Update column styles
        const updatedColumnStyles = { ...element.styles.columnStyles };

        // Add styles for new columns
        for (let i = 0; i < newColumns; i++) {
          if (!updatedColumnStyles[i]) {
            updatedColumnStyles[i] = {
              display: "flex",
              flexDirection: "column",
              //flex: 1,
              // padding: "8px",
              // minHeight: "50px",
            };
          }
        }

        // Update the element
        element.props = {
          ...element.props,
          columns: newColumns,
        };

        element.styles = {
          ...element.styles,
          columnStyles: updatedColumnStyles,
        };
      } else {
        // Handle other updates
        if (updates.props) {
          element.props = {
            ...element.props,
            ...updates.props,
          };
        }

        if (updates.styles) {
          element.styles = {
            ...element.styles,
            ...updates.styles,
          };
        }
      }

      // Update the element in state
      state.elements[elementIndex] = element;

      // Update selectedElement if needed
      if (state.selectedElement?.id === id) {
        state.selectedElement = element;
      }
    },
    removeElement: (state, action) => {
      state.elements = state.elements.filter((el) => el.id !== action.payload);
    },
    setSelectedElement: (state, action) => {
      state.selectedElement = action.payload;
    },
    moveElement: (state, action) => {
      const { draggedId, targetId, position, columnIndex } = action.payload;
      const draggedElement = state.elements.find((el) => el.id === draggedId);
      const targetElement = state.elements.find((el) => el.id === targetId);

      if (draggedElement && targetElement) {
        draggedElement.parentId =
          position === "inside" ? targetId : targetElement.parentId;
        draggedElement.columnIndex = columnIndex;
      }
    },
    undo: (state) => {
      if (state.currentStep > 0 && Array.isArray(state.history)) {
        state.currentStep -= 1;
        state.elements = JSON.parse(
          JSON.stringify(state.history[state.currentStep])
        );
      }
    },
    redo: (state) => {
      if (
        state.currentStep < state.history.length - 1 &&
        Array.isArray(state.history)
      ) {
        state.currentStep += 1;
        state.elements = JSON.parse(
          JSON.stringify(state.history[state.currentStep])
        );
      }
    },
    saveToHistory: (state) => {
      if (!Array.isArray(state.elements)) {
        state.elements = [];
      }
      if (!Array.isArray(state.history)) {
        state.history = [];
      }

      state.history = state.history.slice(0, state.currentStep + 1);
      state.history.push(JSON.parse(JSON.stringify(state.elements)));
      state.currentStep += 1;
    },
    deleteElement: (state, action) => {
      if (!Array.isArray(state.elements)) {
        state.elements = [];
        return;
      }

      const elementId = action.payload;
      const removeElement = (id) => {
        const childElements = state.elements.filter((el) => el.parentId === id);
        childElements.forEach((child) => removeElement(child.id));
        state.elements = state.elements.filter((el) => el.id !== id);
      };
      removeElement(elementId);
      if (state.selectedElement?.id === elementId) {
        state.selectedElement = null;
      }
    },
  },
});

export const {
  addElement,
  updateElement,
  removeElement,
  setSelectedElement,
  moveElement,
  undo,
  redo,
  saveToHistory,
  deleteElement,
} = builderSlice.actions;

export default builderSlice.reducer;

export const selectSortedElements = (state) => {
  const elements = state.pageBuilder.elements || [];
  return [...elements].sort((a, b) => {
    if (a.parentId === b.parentId && a.columnIndex === b.columnIndex) {
      return a.order - b.order;
    }
    return 0;
  });
};
