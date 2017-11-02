# AC Form Field Repeater

## Examples

### Repeat some fields

` data-ac-repeater `

```html
<div class='some-repeating-fields' data-ac-repeater >
<label>Some label</label>
<input value='' name="my-input">
</div>
```
An element with the data attribute ```data-ac-repeater``` will be repeated.
Input names will be appended with a dash and a count integer.

`name="my-input-1"`

`name="my-input-2"`

### Repeat some fields as post arrays

` data-ac-repeater="myrow"`

```html
<div class='some-repeating-fields' data-ac-repeater="myrow" >
<label>Some label</label>
<input value='' name="my-input">
</div>
```

An element with the data attribute ```data-ac-repeater```   and a value of any string ```data-ac-repeater="myrow"```  will be repeated as a post array.
Input names use the value of the data attributes to create an array.

`name="myrow[myrow-1][my-input]"`

`name="myrow[myrow-2][my-input]"`


If the element has an additional data att ```date=ac-repeater-text``` the value will be used as the add button text.
