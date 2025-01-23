import express from "express";
import { AuthService } from "../services/auth.service.js";
import { auditLog } from "../utils/audit.js";
import { logError, logInfo } from "../utils/logger.js";
import { verifyToken } from "../middleware/auth.js";
import { HttpResponse } from "../utils/httpResponse.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const tokens = await AuthService.login(username, password);

    // await auditLog("users", tokens.id, "LOGIN", null, tokens, req.user.id, req);
    logInfo("User logged in successfully", { username });

    return HttpResponse.success("Login successful", tokens).send(res);
  } catch (error) {
    logError("Login failed", error, { username: req.body.username });
    return HttpResponse.notFound(error.message).send(res);
  }
});

router.post("/verify-token", async (req, res) => {
  try {
    const data = await AuthService.verifyToken(req, res);
    return HttpResponse.success("Login successful", data).send(res);
  } catch (error) {
    logError("Authentication failed", error);
    return HttpResponse.unauthorized("Authentication failed").send(res);
  }
});

router.post("/refresh-token", async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const tokens = await AuthService.refreshToken(refreshToken);
    logInfo("Token refreshed successfully");
    return HttpResponse.success("Token refreshed successfully", tokens).send(
      res
    );
  } catch (error) {
    logError("Token refresh failed", error);
    return HttpResponse.unauthorized(error.message).send(res);
  }
});

router.post("/logout", verifyToken, async (req, res) => {
  try {
    const { refreshToken } = req.body;
    await AuthService.logout(refreshToken);
    // await auditLog("users", req.user.id, "LOGOUT", null, null, req.user.id, req);
    logInfo("User logged out successfully", { userId: req.user.id });
    return HttpResponse.success("Logged out successfully").send(res);
  } catch (error) {
    logError("Logout failed", error);
    return HttpResponse.badRequest(error.message).send(res);
  }
});

export default router;
