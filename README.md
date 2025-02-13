# React useEffect Hook Bug: Missing Cleanup and Incorrect Dependency Array

This repository demonstrates a common bug in React applications involving the `useEffect` hook. The bug involves a missing cleanup function and an improperly defined dependency array, leading to memory leaks and unexpected component behavior.

## Bug Description

The `MyComponent` component uses `useEffect` to update a counter every second. However, the dependency array is empty (`[]`), causing the effect to run only once when the component mounts.  Additionally, it lacks a cleanup function to clear the `setInterval` when the component unmounts.  This results in multiple intervals running simultaneously, leading to potential performance degradation and memory leaks.

## Bug Solution

The solution involves adding a cleanup function within the `useEffect` hook to clear the interval using `clearInterval` before the component unmounts.  Additionally, the dependency array is updated to include the `count` variable, ensuring that the effect runs whenever the `count` updates.

## How to reproduce the bug:
1. Clone the repo
2. Run `npm install`
3. Run `npm start`
4. Observe the increasing counter. Note that even if you navigate away from this component, the interval will continue running in the background (memory leak).