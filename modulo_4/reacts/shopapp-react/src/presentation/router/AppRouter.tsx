// src/presentation/router/AppRouter.tsx

// 1. PRIMERO: Todos los imports estáticos siempre van arriba
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import { useAuthStore } from '@/presentation/store/auth.store'
import ProtectedRoute from './ProtectedRoute'
import PlaceholderPage from '../pages/PlaceholderPage'
import AppShell from '../components/AppShell'

// 2. SEGUNDO: Los imports dinámicos (lazy) van después
const LoginPage = lazy(() => import('../pages/auth/LoginPage'))
const RegisterPage = lazy(() => import('../pages/auth/RegisterPage'))
const CatalogPage = lazy(() => import('../pages/catalog/CatalogPage')) // Integrado desde el Módulo 4
const CheckoutPage = lazy(() => import('../pages/orders/CheckoutPage')) // ¡Agregado aquí!

// ─── Loader global ────────────────────────────────────────────────────────────
function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  )
}

// ─── Router ───────────────────────────────────────────────────────────────────
export default function AppRouter() {
  const loadSession = useAuthStore((state) => state.loadSession)

  useEffect(() => {
    loadSession()
  }, [loadSession])

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Rutas de autenticación (sin AppShell) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rutas con AppShell */}
          <Route element={<AppShell />}>
            {/* Públicas — Reemplazados los placeholders por CatalogPage real */}
            <Route path="/" element={<CatalogPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/products/:id" element={<PlaceholderPage title="Detalle de producto — Módulo 5" />} />

            {/* Requieren autenticación */}
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <PlaceholderPage title="Carrito — Módulo 6" />
                </ProtectedRoute>
              }
            />
            {/* Nueva ruta protegida para el Checkout */}
            <Route
              path="/orders/new"
              element = {
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute>
                  <PlaceholderPage title="Órdenes — Módulo 7" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders/:id"
              element={
                <ProtectedRoute>
                  <PlaceholderPage title="Detalle de orden — Módulo 7" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <PlaceholderPage title="Perfil — Módulo 8" />
                </ProtectedRoute>
              }
            />

            {/* Requieren autenticación + rol staff */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Dashboard — Módulo 9" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/categories"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Categorías — Módulo 10" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Productos — Módulo 11" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Órdenes — Módulo 12" />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute requireStaff>
                  <PlaceholderPage title="Admin Usuarios — Módulo 13" />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}