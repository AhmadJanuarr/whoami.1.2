export const getUserId = (): string => {
  try {
    if (typeof window === "undefined" || !window.localStorage) {
      console.warn("getClientId dipanggil di server atau localStorage tidak tersedia")
      return ""
    }

    let id = localStorage.getItem("clientId")
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem("clientId", id)
    } else {
      console.info("ClientId diambil dari localStorage:", id)
    }

    return id
  } catch (err) {
    console.error("Error saat getClientId:", err)
    return ""
  }
}
