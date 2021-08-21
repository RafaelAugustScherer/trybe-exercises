# Flexbox

A Flexbox is a container that aligns **direct** items inside it to make the items responsive to page resolution changes making the website content better for the user to visualize.

```css
.flex-container {
	display: flex;
}

.flex-container [tag] {
	/* Every innerTag aligned */
}
```

## Flex axes | Direction

How are the container items aligned within, based on the X / Y axes.

```css
.flex-container {
flex-direction: column, column-reverse, row, row-reverse
}
```

## Flex lines | Wrap

Force the content to stay within the container? Allows for multiple lines of content.

```css
.flex-container {
	flex-wrap: nowrap, wrap, wrap-reverse
}
```

## Flex Flow

Shortcut to `flex-direction` & `flex-wrap`.

```css
.flex-container {
	flex-flow: [direction] [wrap]
}
```

# Content properties

Properties to every item that is inside a Flexbox container.

## Justify Content

Modify spacing according to the **direction (main axis).**

```css
.flex-container div {
	justify-content: center, space-around, space-between, space-evenly
}
```

## Align Content

Modify spacing according to the **cross direction (cross axis)**.

```css
.flex-container div {
	align-content: center, space-around, space-between, space-evenly
}
```

## Align Items

Modify item positioning according to the **cross direction (cross axis)**.

```css
.flex-container div {
	align-items: flex-start, flex-end, center, baseline
}
```