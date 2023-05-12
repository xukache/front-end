-- 使用 count(*) 来统计 users 表中，状态为 0 用户的总数量
-- SELECT count(*) FROM users WHERE status=0
-- 将列名称从 COUNT(*) 修改为 total
SELECT COUNT(*) AS total FROM users WHERE status=0