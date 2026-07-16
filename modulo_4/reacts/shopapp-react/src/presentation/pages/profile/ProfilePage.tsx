// src/presentation/pages/profile/ProfilePage.tsx
import { useEffect } from 'react'
import { useAuthStore } from '@/presentation/store/auth.store'
import { useProfileStore } from '@/presentation/store/profile.store'
import { ImageUploader } from '@/presentation/components/ImageUploader'
import { UserAvatar } from '@/presentation/components/UserAvatar'
// (Mantén el resto de tus importaciones de UI como Tabs, Card, etc.)

export default function ProfilePage() {
  const isStaff = useAuthStore((s) => s.user?.is_staff)
  const { profile, isLoading, isSaving, error, fetchProfile, updateProfile, uploadAvatar } =
    useProfileStore()

  // ... (Mantén tu lógica de inicialización, useEffects, etc.)

  async function handleAvatarUpload(file: File) {
    await uploadAvatar(file)
  }

  return (
    // ... (Tu contenedor principal y TabsList)
    
    <TabsContent value="info" className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Información de cuenta</CardTitle>
          <CardDescription>Tus datos personales registrados en ShopApp.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center gap-2">
              <UserAvatar user={profile} size="lg" />
              <ImageUploader
                currentImageUrl={profile?.avatar_url ?? null}
                onUpload={handleAvatarUpload}
                circular
                className="hidden" // Ocultamos el uploader principal aquí para usar la sección dedicada
              />
            </div>
            
            {/* ... (Mantén tu bloque de nombre, email y badge de staff aquí) ... */}
            
          </div>

          {/* Sección dedicada para cambiar el avatar */}
          <div className="flex flex-col items-center gap-3 border-t pt-6">
            <h3 className="text-sm font-medium text-muted-foreground">Foto de perfil</h3>
            <ImageUploader
              currentImageUrl={profile?.avatar_url ?? null}
              onUpload={handleAvatarUpload}
              circular
            />
          </div>
        </CardContent>
      </Card>
    </TabsContent>
    
    // ... (Mantén el resto de tus pestañas. Nota: Asegúrate de excluir la sección de "servicios" como estableciste previamente)
  )
}