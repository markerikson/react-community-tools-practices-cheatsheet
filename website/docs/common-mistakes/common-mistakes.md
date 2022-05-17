---
id: common-mistakes
title: Common Mistakes
sidebar_label: Common Mistakes
---

## Maintaining state that could be derived

It can be pretty easy to find yourself maintaining several pieces of related state. Take the following code as an example:

```js
const [dateOfBirth, setDateOBirth] = useState(null);
const [ageInYears, setAgeInYears] = useState(null);
const [daysUntilBirthday, setDaysUntilBirthday] = useState(null);

useEffect(() => {
  setAgeInYears(getAgeInYears(dateOfBirth));
  setDaysUntilBirthday(getDaysUntilBirthday(dateOfBirth));
}, [dateOfBirth]);
```

Based on the user's date of birth, we want to find out their age in years and how many days there are until their next birthday. It seems natural to watch the value of `dateOfBirth` and set the other pieces of state based on that. However, it may become hard to follow how the state is updated as the code becomes more complex. Especially if we call `setAgeInYears` or `setDaysUntilBirthday` in multiple places. We can express it more simply as:

```js
const [dateOfBirth, setDateOBirth] = useState(null);
const ageInYears = getAgeInYears(dateOfBirth);
const daysUntilBirthday = getDaysUntilBirthday(dateOfBirth);
```

We can call `getAgeInYears` and `getDaysUntilBirthday` on each render. We know we will have the latest value for `dateOfBirth`, removing the need for the `useEffect`. We avoid any potential bugs related by deriving the state directly. We also don't need to write any synchronization code.

You might be wondering, "What if it's very costly to calculate these derived state values? Won't this cause performance issues in my component?" which is a valid concern. However, in most cases, the values can be derived quickly, which won't impact performance. If you know a calculation will be costly or see performance issues, you can use the `useMemo` hook to run the calculations only when `dateOfBirth` updates.

```js
const [dateOfBirth, setDateOBirth] = useState(null);
const ageInYears = useMemo(() => getAgeInYears(dateOfBirth), [dateOfBirth]);
const daysUntilBirthday = useMemo(
  () => getDaysUntilBirthday(dateOfBirth),
  [dateOfBirth]
);
```

In some ways, this is like using `useEffect` and setting the state when `dateOfBirth` changes. However, the values are derived directly from `dateOfBirth`, so we avoid the bugs and code that come with manually synchronizing the state.

:::caution

Remember that `useMemo` is an optimization for when a value is costly to calculate. You do not need to use it for every derived value, and using it unnecessarily could hurt performance. So don't optimize prematurely and measure before and after the optimization to ensure it provides value. [This article explores these optimizations and how they can be harmful](https://kentcdodds.com/blog/usememo-and-usecallback).

:::
