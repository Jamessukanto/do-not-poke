# Q7: Frontend Performance Optimizations

## 1. Code Splitting / Lazy Loading

**What**: Split your JavaScript bundle into smaller chunks and load them only when needed.

**Why**: Reduces initial page load time by loading only essential code first.

```javascript
// Use React.lazy() for code splitting
const SuperBigComponent = React.lazy(() => import('./SuperBigComponent'));

```

## 2. Image Optimization

**What**: Compress images, use modern formats (WebP), and lazy load images.

**Why**: Images are often the largest assets; optimizing them significantly reduces load time.

```html
<!-- Use lazy loading and modern formats -->
<img 
  src="image.webp" 
  srcset="image.webp 1x, image-2x.webp 2x"
  loading="lazy"
  alt="Description"
>
```

```css
/* Use CSS for responsive images */
.responsive-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
```

## 3. Memoization 

**What**: Cache expensive computations and prevent unnecessary re-renders, e.g. 
- React.memo -> Memoize component to prevent re-renders
- useMemo -> Memoize expensive calculation
- useCallback -> Memoize callback functions

**Why**: Avoids recalculating values and re-rendering components when props/state haven't changed.



## 4. Virtual Scrolling

**What**: Calculate which items are visible in the viewport and only renders those instead of all items at once, recycling DOM elements as you scroll

**Why**: Improve performance for large lists.

## 5: Caching Strategies

**What**: Use service workers to cache assets and API responses.

**Why**: Reduces network requests, enables offline access, and improve load times.

**Caching Strategies**:

1. **Cache First**: Check cache, fallback to network
   - **When to use**: Static assets (images, fonts)

2. **Network First**: Try network, fallback to cache
   - **When to use**: API responses, user profile, latest posts

3. **Stale-While-Revalidate**: Return cache immediately, update in background
   - **When to use**: Content that can be slightly outdated but should feel fast (news articles, products, product listings)
