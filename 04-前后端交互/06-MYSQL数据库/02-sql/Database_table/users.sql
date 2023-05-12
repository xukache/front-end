/*
 Navicat Premium Data Transfer

 Source Server         : myWin11
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : my_db_01

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 12/05/2023 10:10:35
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '这是用户信息的唯一标识',
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户密码',
  `status` tinyint(1) UNSIGNED ZEROFILL NOT NULL DEFAULT 0 COMMENT '用户状态，是一个布尔值\r\n0表示用户状态正常\r\n1表示用户被禁用',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `id`(`id` ASC, `username` ASC) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'zs', '123456', 0);
INSERT INTO `users` VALUES (2, 'ls', 'admin123', 1);
INSERT INTO `users` VALUES (3, 'ww', 'admin666', 0);
INSERT INTO `users` VALUES (4, 'admin', 'admin111', 0);

SET FOREIGN_KEY_CHECKS = 1;
