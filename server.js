import { createServer } from "node:http";

const port = process.env.PORT || 5000;
const products = [
  { id: 1, name: "Farm fresh tomatoes", category: "Fruits & Veg", size: "500 g", price: 48, image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=85" },
  { id: 2, name: "Organic bananas", category: "Fruits & Veg", size: "6 pcs", price: 55, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=700&q=85" },
  { id: 3, name: "Aashirvaad atta", category: "Staples", size: "5 kg", price: 295, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=85" },
  { id: 4, name: "Amul Gold milk", category: "Dairy & Eggs", size: "1 L", price: 68, image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=85" },
  { id: 5, name: "Tata salt", category: "Staples", size: "1 kg", price: 28, image: "https://images.unsplash.com/photo-1518110925495-5fe2c00fd1fb?auto=format&fit=crop&w=700&q=85" },
  { id: 6, name: "Harvested almonds", category: "Snacks", size: "200 g", price: 220, image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=700&q=85" },
];
const cart = new Map();
const favourites = new Set();
const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS", "Access-Control-Allow-Headers": "Content-Type" };
const respond = (res, status, body) => { res.writeHead(status, headers); res.end(JSON.stringify(body)); };

createServer(async (req, res) => {
  if (req.method === "OPTIONS") return respond(res, 204, {});
  const url = new URL(req.url, `http://${req.headers.host}`);
  const productId = Number(url.pathname.split("/").pop());
  if (req.method === "GET" && url.pathname === "/api/health") return respond(res, 200, { status: "ok" });
  if (req.method === "GET" && url.pathname === "/api/products") return respond(res, 200, products);
  if (req.method === "GET" && url.pathname === "/api/cart") return respond(res, 200, [...cart.values()]);
  if (req.method === "GET" && url.pathname === "/api/favourites") return respond(res, 200, [...favourites]);
  if (req.method === "POST" && url.pathname === "/api/cart") {
    let raw = ""; for await (const chunk of req) raw += chunk;
    const product = products.find((item) => item.id === Number(JSON.parse(raw || "{}").productId));
    if (!product) return respond(res, 404, { error: "Product not found" });
    const current = cart.get(product.id) || { ...product, quantity: 0 };
    cart.set(product.id, { ...current, quantity: current.quantity + 1 });
    return respond(res, 201, [...cart.values()]);
  }
  if (req.method === "DELETE" && url.pathname.startsWith("/api/cart/")) { cart.delete(productId); return respond(res, 200, [...cart.values()]); }
  if (req.method === "POST" && url.pathname.startsWith("/api/favourites/")) { favourites.add(productId); return respond(res, 200, [...favourites]); }
  if (req.method === "DELETE" && url.pathname.startsWith("/api/favourites/")) { favourites.delete(productId); return respond(res, 200, [...favourites]); }
  return respond(res, 404, { error: "Route not found" });
}).listen(port, () => console.log(`Chaupal Mart API running at http://localhost:${port}`));
