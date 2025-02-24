# JavaScript Performance Optimization: Reflow & Repaint

## 1️⃣ **Introduction to Performance Optimization**

When optimizing JavaScript for better performance, two key concepts play a significant role: **Reflow** and **Repaint**. Understanding these will help in writing efficient code and improving web page performance.

---

## 2️⃣ **What is Reflow?**

Reflow (also called **layout recalculation**) happens when the browser needs to calculate the positions and dimensions of elements on the page. This process occurs when changes affect the layout structure.

### **🔹 When Does Reflow Occur?**

Reflow occurs when:

- Adding, removing, or modifying DOM elements.
- Changing size, margin, padding, or position properties.
- Changing fonts (since they affect text size and layout).
- Manipulating the `offsetWidth`, `offsetHeight`, `clientWidth`, `clientHeight`, `scrollWidth`, or `scrollHeight` properties (forces reflow).
- Setting `display: none` (hides the element, triggering a full reflow).
- Resizing the browser window.
- Changing box model properties like `width`, `height`, `margin`, `padding`, or `border`.

### **🔹 Why is Reflow Expensive?**

Reflow can be very costly because it affects not just the modified element but also its children, parent elements, and sometimes the entire document.

---

## 3️⃣ **What is Repaint?**

Repaint occurs when a change is made to an element's **appearance** (like color or visibility) but does **not** affect its layout.

### **🔹 When Does Repaint Occur?**

Repaint happens when:

- Changing `background-color`, `color`, `visibility`, `box-shadow`, etc.
- Updating styles that do not affect layout (e.g., `opacity` or `border-color`).

### **🔹 Repaint vs. Reflow**

| **Aspect**      | **Reflow**                        | **Repaint**                       |
| --------------- | --------------------------------- | --------------------------------- |
| Affects Layout? | ✅ Yes                            | ❌ No                             |
| Expensive?      | ⚠️ Very Expensive                 | ⚡ Less Expensive                 |
| Causes?         | Size, position, structure changes | Color, visibility, shadow changes |

---

## 4️⃣ **How to Optimize and Reduce Reflow/Repaint?**

### ✅ **Best Practices to Reduce Reflow & Repaint**

1. **Modify Classes Instead of Inline Styles**  
   ❌ `element.style.width = "100px";` (triggers reflow)  
   ✅ `element.classList.add("new-style");` (only applies new styles efficiently)

2. **Use `visibility: hidden` Instead of `display: none`** (When Possible)

   - `display: none;` → **Triggers reflow** (removes element from layout).
   - `visibility: hidden;` → **Only triggers repaint** (keeps layout intact).

3. **Avoid Requesting Layout Information Repeatedly**

   - Accessing `offsetWidth`, `offsetHeight`, etc., triggers reflow. Minimize their usage.

4. **Batch DOM Updates Together** (Minimize Layout Thrashing)  
   ❌ **BAD**: Changing multiple styles separately causes multiple reflows:

   ```js
   element.style.width = "200px";
   element.style.height = "100px";
   element.style.margin = "10px";
   ```

   ✅ **GOOD**: Use `classList` or `requestAnimationFrame` to batch changes:

   ```js
   element.classList.add("updated-styles");
   ```

5. **Use `documentFragment` for Large DOM Updates**

   - Instead of adding multiple elements one by one, use `documentFragment` to batch them:

   ```js
   let fragment = document.createDocumentFragment();
   for (let i = 0; i < 100; i++) {
     let div = document.createElement("div");
     div.textContent = `Item ${i}`;
     fragment.appendChild(div);
   }
   document.body.appendChild(fragment); // Only one reflow!
   ```

6. **Use `will-change` Property for Smooth Animations**

   - Helps the browser prepare for expected changes.

   ```css
   .animate-element {
     will-change: transform, opacity;
   }
   ```

7. **Prefer `transform` & `opacity` for Animations**
   - `transform: translateX(50px);` is GPU-optimized (no reflow).
   - Avoid `left`, `top`, `width`, `height` for animations (cause reflow).

---

## 5️⃣ **Final Thoughts**

- **Reflow is expensive** → Minimize layout changes.
- **Repaint is cheaper than reflow** → Optimize visual changes.
- **Use batching, `documentFragment`, and `requestAnimationFrame`** to avoid performance hits.
- **Follow best practices** to create smooth, high-performance web applications! 🚀🔥
