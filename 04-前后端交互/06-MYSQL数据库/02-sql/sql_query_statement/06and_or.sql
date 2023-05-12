-- 使用 AND 来显示所有 status为0，并且id小于3的用户
-- SELECT * FROM users WHERE status=0 AND id<3

-- 使用 OR 来显示所有 status 为 1 ，或者 username 为 zs 的用户
SELECT * FROM users WHERE status=1 OR username='zs'