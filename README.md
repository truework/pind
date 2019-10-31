# pind
Tiny React util to pin an element to another. **~200 bytes gzipped,** ~700 bytes
with dependencies.

### Install
```
npm i pind --save
```

### What is this?
When dealing with UI like custom dropdowns and tooltips, you might run into
`z-index` and positioning issues. One fix for that is to append content to the
top level of the DOM tree, above and out of the way of other components.

This library does that. It's a low-level abstraction, so use it to build other
higher-level libraries like dropdowns.

# Usage
```javascript
import Pind from 'pind';

render(() => {
  const target = React.createRef();
  const [ pinned, setPinned ] = React.useState(false);

  return (
    <>
      <button ref={target} onClick={() => setPinned(!pinned)}>
        Click to Pin
      </button>

      <Pind pinned={pinned} to={target} at="bottom">
        <div>
          I'm pinned to the bottom of the button!
        </div>
      </Pind>
    </>
  );
}, document.getElementById('root'))
```

### License
MIT License © [Eric Bailey](https://estrattonbailey.com)
