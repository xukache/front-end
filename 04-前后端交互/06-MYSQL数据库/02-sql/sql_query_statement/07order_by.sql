-- 注意：下面两条 SQL 语句是等价的
-- 因为 ORDER BY 默认进行升序排序
-- 其中，ASC关键字代表升序排序
-- SELECT * FROM users ORDER BY status
-- SELECT * FROM users ORDER BY status ASC

-- 对users表中的数据，按照id字段进行降序排序 DESC
-- SELECT * FROM users ORDER BY id DESC

-- 对 users 表中的数据，先按照 status 进行降序排序，再按照 username 字母的顺序，进行升序的排序
-- 注意：DESC 代表降序排序
SELECT * FROM users ORDER BY status DESC, username ASC