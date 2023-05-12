-- 把 users 表中 id 为 3 的用户密码，更新为 888888
-- UPDATE users SET password = '888888' WHERE id = 3

-- 把users表中id为2的用户密码和用户状态。分别更新为admin123和1
UPDATE users SET password = 'admin123', status = 1 WHERE id = 2