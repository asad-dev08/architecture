import { Button, Layout } from "antd";
import React from "react";
import ElementToolbox from "../../components/page-builder/ElementToolbox";
import Canvas from "../../components/page-builder/Canvas";
import PropertyEditor from "../../components/page-builder/PropertyEditor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useSelector } from "react-redux";
import { generatePreviewHTML } from "../../components/page-builder/previewTemplate";
import { MdPreview } from "react-icons/md";

const { Sider, Content } = Layout;

const PageBuilder = () => {
  const elements = useSelector((state) => state.pageBuilder.elements);

  const handlePreview = () => {
    const previewWindow = window.open("", "_blank");
    console.log("elements: ", elements);
    const previewHTML = generatePreviewHTML(elements);

    previewWindow.document.open();
    previewWindow.document.write(previewHTML);
    previewWindow.document.close();
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <Layout style={{ height: "100vh" }}>
        <Sider
          width={300}
          theme="light"
          style={{
            height: "100vh",
            overflow: "auto",
            position: "fixed",
            left: 0,
          }}
        >
          <ElementToolbox />
        </Sider>
        <Content
          style={{
            marginLeft: 300,
            marginRight: 300,
            overflow: "auto",
            height: "100vh",
          }}
        >
          <Button type="primary" icon={<MdPreview />} onClick={handlePreview}>
            Preview
          </Button>
          <Canvas />
        </Content>
        <Sider
          width={300}
          theme="light"
          style={{
            height: "100vh",
            overflow: "auto",
            position: "fixed",
            right: 0,
          }}
        >
          <PropertyEditor />
        </Sider>
      </Layout>
    </DndProvider>
  );
};

export default PageBuilder;
