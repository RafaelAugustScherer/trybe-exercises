# Specific Item Properties

Properties applied to one or a group of items inside the container

## Align Self

Modify **item positioning** according to the **cross direction (cross axis)**.

```css
.flex-container div {
	align-self: [props]
}
```

## Order

Re-order **item position** in the flebox container

```css
.flex-container div {
	order: [num]
	/* Default: 0 || **Before** default items: -1 || **After** default items: 1 */
}
```

## Flex Grow, Shrink & Basis

Modify **item size** compared to **other items** in the same flexbox.

```css
.flex-container div {
	flex-grow: [ 0 - 1 ]
	/* Default: 0 || Occupy **all space** left: 1 */
	flex-shrink: [num]
	/* Default 1 || Shrink item to free space  for others: > 1 */
	flex-basis [size]
	/* Default: Auto || Specify fixed size for item: [num] px */
}
```

## Flex

Shortcut to **flex-grow**, **flex-shrink** & **flex-basis**.

```css
flex-container div {
	flex: [grow] [shrink] [basis]
}
```