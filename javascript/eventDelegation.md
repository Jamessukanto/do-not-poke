# Q4: Event Delegation


## What: 
Instead of attaching listeners to individual child elements, we write such that:
1. Attach a single event listener to a parent element.
2. Parent delegates event handling to its children through event bubbling
    a. User clicks child's button 
    b. Event bubbles up to parent, caught by its listener
    c. Delegates to child

Note that this is automatic with React.


## Why useful?
1. **Performance**: One listener instead of many
2. **Memory**: One listener instead of many
2. **Dynamic Content**: When content is added/removed dynamically, listeners don't break
3. **Usability**: Easier to manage many similar elements





<!-- --------------------------- Notes --------------------------- -->

## Example: 
### Shopping Cart - Delete Item Buttons

Scenario: A shopping cart with multiple items, each with a "Delete" button. All delete buttons do the same thing (remove item), but for different items.

### Without Event Delegation 

```javascript
// Attach listener to each delete button individually
const deleteButtons = document.querySelectorAll('.delete-item');
deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
        const itemId = this.dataset.itemId;
        removeItemFromCart(itemId);
    });
});
```

### With Event Delegation 

```javascript
// ATTACH - Attach ONE listener to the cart container
const cartContainer = document.getElementById('cart-items');
cartContainer.addEventListener('click', function(event) {
    // DELEGATE - Check if click came from a delete button
    if (event.target.matches('.delete-item')) {
        const itemId = event.target.dataset.itemId;
        removeItemFromCart(itemId);
    }
});

```

### With React, event delegation is automatic

```jsx
function ShoppingCart() {
  const handleDelete = (itemId) => {
    removeItemFromCart(itemId);
  };

  return (
    <div id="cart-items">
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <button 
            className="delete-item" 
            // This looks like individual listener but,
            // under the hood:
            // 1. React attaches ONE listener to the document root (not each button)
            // 2. Event bubbles up naturally to document root
            // 3. React checks which React component should handle the event using `event.target`
            onClick={() => handleDelete(item.id)}  
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
```



