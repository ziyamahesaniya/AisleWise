import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { PrimaryButton } from "../../components/PrimaryButton";
import { colors } from "../../lib/theme";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>AisleWise</Text>
        <Text style={styles.tagline}>
          Build your grocery list, organize it for your store, and keep track of the prices you've paid.
        </Text>
      </View>
      <View style={styles.buttons}>
        <PrimaryButton title="Sign In" onPress={() => router.push("/(auth)/sign-in")} />
        <View style={{ height: 12 }} />
        <PrimaryButton title="Create Account" variant="secondary" onPress={() => router.push("/(auth)/sign-up")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: "space-between" },
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 36, fontWeight: "700", color: colors.primaryDark, marginBottom: 16 },
  tagline: { fontSize: 16, color: colors.textMuted, textAlign: "center", lineHeight: 24, paddingHorizontal: 12 },
  buttons: { paddingBottom: 24 },
});