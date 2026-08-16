import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../lib/theme";

export function LoadingScreen({ message = "Loading..." }: { message?: string }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.background },
  text: { color: colors.textMuted, fontSize: 15, marginTop: 12 },
});