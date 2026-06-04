import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const sections = [
  ['Clothing', 'Streetwear, premium drops, and digital-first presentation'],
  ['Books', 'Stories, guides, and collectible reading experiences'],
  ['Beats', 'Licensable music previews with immersive discovery']
]

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.kicker}>ONLINE STORE</Text>
        <Text style={styles.title}>FLYE ARCADE</Text>
        <Text style={styles.subtitle}>
          A mobile storefront concept built for Android and iOS with the same neon-luxury identity as the web experience.
        </Text>

        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>Shop in another dimension</Text>
          <Text style={styles.heroBody}>Launch the category portals, spotlight new drops, and expand into commerce flows next.</Text>
        </View>

        {sections.map(([title, copy]) => (
          <View key={title} style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <Text style={styles.sectionBody}>{copy}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#050510' },
  container: { padding: 24, gap: 16 },
  kicker: { color: '#22d3ee', letterSpacing: 4, fontSize: 11, marginTop: 8 },
  title: { color: '#fff', fontSize: 34, fontWeight: '800' },
  subtitle: { color: '#b9bfd7', lineHeight: 22 },
  heroCard: {
    backgroundColor: '#101327',
    borderColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    padding: 22,
    borderRadius: 22,
    marginTop: 10
  },
  heroTitle: { color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 8 },
  heroBody: { color: '#c7cbe0', lineHeight: 22 },
  sectionCard: {
    backgroundColor: '#0d1020',
    borderColor: 'rgba(124,92,246,0.35)',
    borderWidth: 1,
    padding: 20,
    borderRadius: 20
  },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: '700', marginBottom: 6 },
  sectionBody: { color: '#c7cbe0', lineHeight: 21 }
})
