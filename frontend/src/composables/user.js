import { ref } from "vue";

// Simulated user state
const user = ref({
    id: 1,
    name: "John Doe",
    is_admin: false,
    disabled: false,
  });

export function useUser() {
  return user.value;
}