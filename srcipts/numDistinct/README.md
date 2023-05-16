# 不同的子序列

给你两个字符串 `s`和 `t` ，统计并返回在 `s` 的 **子序列** 中 `t` 出现的个数。

题目数据保证答案符合 32 位带符号整数范围。

**示例 1：**

```
输入：s = "rabbbit", t = "rabbit"输出：3解释：如下所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。rabbbitrabbbitrabbbit
```

**示例 2：**

```
输入：s = "babgbag", t = "bag"输出：5解释：如下所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
babgbagbabgbagbabgbagbabgbagbabgbag
```

**提示：**

*   `1 <= s.length, t.length <= 1000`

*   `s` 和 `t` 由英文字母组成
