# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that leads to an infinite loop. The problem arises from incorrectly updating state within the `useEffect` callback, even when using an empty dependency array.

## Bug Description

The `bug.js` file contains a component that attempts to increment a state variable within a `useEffect` hook with an empty dependency array. This is intended to run only once when the component mounts, but because updating state causes a re-render, the `useEffect` hook is triggered again, resulting in an infinite loop.

## Solution

The `bugSolution.js` file presents the corrected code.  It demonstrates how to correctly use state variables within useEffect to prevent infinite loops.