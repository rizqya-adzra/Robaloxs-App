export const useApi = () => {
  const config = useRuntimeConfig()
  
  const apiFetch = $fetch.create({
    baseURL: config.public.apiBase || 'http://127.0.0.1:8000/api/', 
  })

  return apiFetch
}