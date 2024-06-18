import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Platform,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Bước 1: Xác định nhu cầu khách hàng",
    content: "Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 09:00",
    time: "20/07/2020 09:00",
    status: "done",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Bạn có khách hàng mới",
    content:
      "Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay",
    time: "20/08/2020 9:00",
    status: "unread",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Khách hàng được thêm bị trùng",
    content:
      "Rất tiếc, khách hàng được thêm vào đã tồn tại trong hệ thống. Vui lòng kiểm tra lại.",
    time: "20/08/2020 6:00",
    status: "unread",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d73",
    title: "Khách hàng được chia sẻ bị trùng",
    content:
      "Rất tiếc, khách hàng được chia sẻ đã tồn tại trong hệ thống. Vui lòng kiểm tra lại.",
    time: "20/08/2020 06:30",
    status: "done",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Công việc sắp đến hạng trong hôm nay",
    content: "Bạn có 17 công việc sắp đến hạn trong hôm nay",
    time: "20/08/2020 6:00",
    status: "unread",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Công việc đã quá hạn",
    content: "Bạn có 2 công việc đã quá hạn",
    time: "20/08/2020 6:00",
    status: "done",
  },
];

type ItemProps = {
  title: string;
  content: string;
  time: string;
  status: string;
};

const Item = ({ title, content, time, status }: ItemProps) => (
  <View style={[styles.item, status === "unread" && styles.unreadItem]}>
    <Image
      source={
        status === "unread"
          ? require("../../assets/images/unread-message.png")
          : require("../../assets/images/books.png")
      }
      style={styles.icon}
    />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      {content && <Text style={styles.content}>{content}</Text>}
      {time && <Text style={styles.time}>{time}</Text>}
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Thông báo</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            content={item.content}
            time={item.time}
            status={item.status}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    padding: 15,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
    alignItems: "center", // Align items vertically centered
  },
  textContainer: {
    flex: 1, // Take up the remaining space
  },
  title: {
    fontSize: 24,
    paddingBottom: 5,
    fontWeight: "bold",
  },
  content: {
    fontSize: 12,
  },
  time: {
    fontSize: 12,
    color: "#cccccc",
  },
  unreadItem: {
    backgroundColor: "#DDE6ED", // darker background for unread items
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10, // Add some margin to the right for spacing
  },
});

export default App;
