# AC Form Field Repeater

## Examples

### Repeat some fields

` data-ac-repeater `

```
<div class='some-repeating-fields' data-ac-repeater >
<label>Some label</label>
<input value='' name="my-input">
</div>
```
An element with the data attribute ```data-ac-repeater``` will be repeated.
Input names will be appended with a dash and a count integer.

`name="my-input-1"`

`name="my-input-2"`


If the element has an additional data att ```date=ac-repeater-text``` the value will be used as the add button text.
