# jest 用法

### `toEqual`和`toStrictEqual` 的区别


在Jest测试中，`toEqual`和`toStrictEqual`都是用于比较两个对象是否相等的匹配器。它们的主要区别在于对待对象属性值的方式不同。

具体来说，`toEqual`匹配器将比较两个对象的属性值是否相等，而不考虑属性值的类型。这意味着如果两个对象的属性值在逻辑上相等，但类型不同，`toEqual`匹配器仍然会认为它们相等。

相反，`toStrictEqual`匹配器将比较两个对象的属性值和类型是否完全相同。这意味着如果两个对象的属性值虽然逻辑上相等，但是类型不同，`toStrictEqual`匹配器将认为它们不相等。

例如，假设您有以下两个对象：

```javascript
const obj1 = { a: 1 };const obj2 = { a: '1' };
```

使用`toEqual`匹配器进行比较时，这两个对象将被认为是相等的，因为它们的属性值在逻辑上相等，即`obj1.a === obj2.a`。

```javascript
expect(obj1).toEqual(obj2); // 通过
```

但是，使用`toStrictEqual`匹配器进行比较时，这两个对象将被认为是不相等的，因为它们的属性值类型不同，即`typeof obj1.a !== typeof obj2.a`。

```javascript
expect(obj1).not.toStrictEqual(obj2); // 通过
```

因此，当您需要比较对象的属性值和类型时，您应该使用`toStrictEqual`匹配器。如果您只需要比较对象的属性值是否相等，则可以使用`toEqual`匹配器。
