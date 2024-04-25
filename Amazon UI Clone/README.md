<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

---

# React Hooks and Functions Overview

In this document, we'll explore several key React hooks and functions that are commonly used in React applications. Each of these features provides essential functionality for managing state, performing side effects, and handling navigation within React components.

## 1. useState

**Description:**
`useState` is a fundamental hook in React used to manage state variables within functional components. It allows developers to define stateful data that can change over time, triggering component re-renders to reflect those changes.

**Example:**

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## 2. useEffect

**Description:**
`useEffect` is a hook in React that enables performing side effects in functional components. These side effects can include data fetching, setting up subscriptions, or manipulating the DOM directly.

**Example:**

```javascript
import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>{data ? <p>Data: {JSON.stringify(data)}</p> : <p>Loading...</p>}</div>
  );
}
```

## 3. useNavigate

**Description:**
`useNavigate` is a function provided by the `react-router-dom` library, allowing developers to programmatically navigate between different pages within a React application.

**Example:**

```javascript
import React from "react";
import { useNavigate } from "react-router-dom";

function NavigationExample() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/home")}>Go to Home</button>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}
```

## 4. createSearchParams

**Description:**
`createSearchParams` is a function provided by the `react-router-dom` library, enabling developers to construct URL search parameters for use in navigation within React applications.

**Example:**

```javascript
import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";

function SearchExample() {
  const navigate = useNavigate();
  const params = createSearchParams({ q: "react" });

  return (
    <div>
      <button onClick={() => navigate(`/search?${params}`)}>
        Search for "react"
      </button>
    </div>
  );
}
```

## Summary

In summary, the React hooks `useState` and `useEffect`, along with the functions `useNavigate` and `createSearchParams` from `react-router-dom`, provide essential tools for managing state, performing side effects, and handling navigation within React applications. By utilizing these features, developers can create dynamic and interactive user interfaces efficiently.

---
