// stores/toast.ts
import { defineStore } from 'pinia'

export interface ToastItem {
  id: string
  title: string
  message?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

export const useToastStore = defineStore('toast', {
  state: () => ({
    items: [] as ToastItem[],
  }),
  actions: {
    add(toast: Omit<ToastItem, 'id'>) {
      const id = Date.now().toString() + Math.random().toString(36).substring(2)
      
      const newItem = {
        id,
        ...toast,
        duration: toast.duration ?? 3000 // Default 3 detik
      }

      this.items.push(newItem)

      // Auto remove logic di handle store (opsional) atau di component
      if (newItem.duration > 0) {
        setTimeout(() => {
          this.remove(id)
        }, newItem.duration)
      }
    },
    remove(id: string) {
      this.items = this.items.filter((item) => item.id !== id)
    }
  }
})