# Block 12: Components Life Cycle & React Router

Components Life Cycle are divided in 3 parts: **Mount, Update & Unmount.**

## Mount

1. constructor `// Executed during Component initialization, which is done even before mounting proccess`
2. render
3. **componentDidMount**

## Update

1. **shouldComponentUpdate**
2. render
3. **componentDidUpdate**

## **Unmount**

1. **componentWillUnmount**

> Reference: [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
> 

## Why?

Using **setState** inside the **render( )** method can be confusing for React because it is **executed** every time the **state is updated**, creating an **infinite loop**.

These functions are a **neat** form to prevent that.