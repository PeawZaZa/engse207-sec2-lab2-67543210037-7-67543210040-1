// =====================================================================
// config.js — Railway Service URLs
// แก้ URL ให้ตรงกับ Railway ของกลุ่มก่อน deploy frontend
// =====================================================================
window.APP_CONFIG = {
  AUTH_URL:     'auth-service-production-fd5b.up.railway.app',
  TASK_URL:     'determined-grace-production-280c.up.railway.app',
  ACTIVITY_URL: 'activity-service-production-e53a.up.railway.app'
};

// ──────────────────────────────────────────────────────────────────────
// สำหรับทดสอบ Local ให้เปลี่ยนเป็น:
// window.APP_CONFIG = {
//   AUTH_URL:     'http://localhost:3001',
//   TASK_URL:     'http://localhost:3002',
//   ACTIVITY_URL: 'http://localhost:3003'
// };
// ──────────────────────────────────────────────────────────────────────
