import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Story = (props: { gambar: string; judul: string }) => {
  return (
    <View style={{ alignItems: 'center', marginRight: 20 }}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
      />
      <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.storyWrapper}>
          <Story
            judul="Instagram"
            gambar="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          />
          <Story
            judul="Facebook"
            gambar="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          />
          <Story
            judul="Twitter"
            gambar="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg"
          />
          <Story
            judul="LinkedIn"
            gambar="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          />
          <Story
            judul="TikTok"
            gambar="https://upload.wikimedia.org/wikipedia/en/6/6e/TikTok_logo.svg"
          />
          <Story
            judul="Snapchat"
            gambar="https://upload.wikimedia.org/wikipedia/en/a/ad/Snapchat_logo.svg"
          />
          <Story
            judul="Pinterest"
            gambar="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png"
          />
          <Story
            judul="YouTube"
            gambar="https://upload.wikimedia.org/wikipedia/commons/9/9f/YouTube_Logo_%282013-2017%29.png"
          />
          <Story
            judul="WhatsApp"
            gambar="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          />
          <Story
            judul="Telegram"
            gambar="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
          />
          <Story
            judul="Gmail"
            gambar="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
          />
          <Story
            judul="Spotify"
            gambar="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
          />
          <Story
            judul="Minecraft"
            gambar="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
          />
          <Story
            judul="Fortnite"
            gambar="https://upload.wikimedia.org/wikipedia/en/4/48/Fortnite_cover.png"
          />
          <Story
            judul="Call of Duty"
            gambar="https://upload.wikimedia.org/wikipedia/en/5/5a/Call_of_Duty_Modern_Warfare_II_cover.jpg"
          />
          <Story
            judul="Clash of Clans"
            gambar="https://upload.wikimedia.org/wikipedia/en/a/a6/Clash_of_Clans_logo.svg"
          />
          <Story
            judul="Among Us"
            gambar="https://upload.wikimedia.org/wikipedia/en/e/e1/Among_Us_cover_art.png"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  storyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PropsDinamis;