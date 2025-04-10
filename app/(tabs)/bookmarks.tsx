import { View, Text } from "react-native";
import React from "react";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Loader } from "@/components/Loader";
import { COLORS } from "@/constants/theme";
import { styles } from "@/styles/feed.styles";

export default function Bookmarks() {
  const bookmarkedPosts = useQuery(api.bookmarks.getBookmarkedPosts);

  if (bookmarkedPosts === undefined) return <Loader />;
  if (bookmarkedPosts.length === 0) return <NoBookmarksFound />;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bookmarks</Text>
      </View>

      {/* Bookmark screen*/}
    </View>
  );
}

function NoBookmarksFound() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
      }}
    >
      <Text style={{ color: COLORS.primary, fontSize: 22 }}>
        {" "}
        No bookmarked posts yet
      </Text>
    </View>
  );
}
