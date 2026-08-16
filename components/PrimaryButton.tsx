import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, GestureResponderEvent } from "react-native";
import { colors } from "../lib/theme";

type PrimaryButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary";
};

export function PrimaryButton({ title, onPress, loading, disabled, variant = "primary" }: PrimaryButtonProps) {
  const isDisabled = disabled || loading;
  return (
    <TouchableOpacity
      style={[styles.button, variant === "secondary" && styles.secondaryButton, isDisabled && styles.disabledButton]}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={variant === "secondary" ? colors.primary : "#ffffff"} />
      ) : (
        <Text style={[styles.buttonText, variant === "secondary" && styles.secondaryButtonText]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  secondaryButton: { backgroundColor: "transparent", borderWidth: 1, borderColor: colors.primary },
  disabledButton: { opacity: 0.6 },
  buttonText: { color: "#ffffff", fontSize: 16, fontWeight: "600" },
  secondaryButtonText: { color: colors.primary },
});