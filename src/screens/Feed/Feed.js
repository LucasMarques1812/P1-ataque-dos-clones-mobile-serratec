import React from "react";
import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  BackHandler,
} from "react-native";

import options from "../../assets/options.png";
import like from "../../assets/like.png";
import comment from "../../assets/comment.png";
import send from "../../assets/send.png";
import save from "../../assets/save.png";
import { useNavigation } from "@react-navigation/native";

function Feed() {
  const posts = [
    {
      id: "1",
      author: "jogatina.Memes",
      picture_url:
        "https://cdn.discordapp.com/attachments/256240057390727178/1042279257172357160/atreus-boy_meme.png",
      likes: 2317,
      description: "Novo GOW mal saiu e já to amando dms 😍😍😍",
      hashtags: "#GOW #Ragnarok #GOTY",
      place: "Ancient Scandinavia",
    },
    {
      id: "2",
      author: "whats'up.world",
      picture_url:
        "https://cdn.discordapp.com/attachments/256240057390727178/1042283528823509002/Ukraine_poland.png",
      likes: 78.987,
      description:
        "A Russian-made missile killed two people in Poland near its Ukraine border: Polish government",
      hashtags: "#ukrainianwar #russia",
      place: "Polish-ukrainian border",
    },
    {
      id: "3",
      author: "paramore 🔵",
      picture_url:
        "https://cdn.discordapp.com/attachments/256240057390727178/1042286448348504095/Ukraine_poland_-_Copia.png",
      likes: 3996701,
      description:
        "Our new single 'this is why' is finally out! Available on all streaming plataforms",
      hashtags: "#Paramore #Paramoreisback #ThisIsWhy #NewSingle",
      place: "U.S.A",
    },
    {
      id: "4",
      author: "serratec.do.shitpost",
      picture_url:
        "https://cdn.discordapp.com/attachments/256240057390727178/1042273682933944340/ratana.png",
      likes: 3788,
      description: "Mais um pack diário pra galera 😎👍",
      hashtags: "#memes #shitpost",
      place: "Ratanabá",
    },
  ];

  function renderItem({ item: post }) {
    return (
      <View style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image
            style={styles.picture_url}
            source={{ uri: post.picture_url }}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  post: {
    marginVertical: 15,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  postOptions: {},
  userInfo: {},
  author: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
  },
  place: {
    fontSize: 12,
    color: "#666",
  },
  picture_url: {
    width: "100%",
    height: 400,
  },
  footer: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  action: {
    marginRight: 8,
  },
  leftActions: {
    flexDirection: "row",
  },
  likes: {
    fontWeight: "bold",
    fontSize: 12,
  },
  hashtags: {
    color: "#002D5E",
  },
  description: {
    color: "#000",
    lineHeight: 18,
  },
});

export default Feed;
