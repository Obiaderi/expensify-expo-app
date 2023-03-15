import { Snackbar } from "react-native-paper";

function CustomSnackbar({ visible, setVisible, message, bgColor }) {
  return (
    <Snackbar
      className={bgColor}
      visible={visible}
      onDismiss={() => setVisible(false)}
      duration={3000}
      action={{
        label: "Ok",
        onPress: () => {
          setVisible(false);
        },
      }}
    >
      {message}
    </Snackbar>
  );
}

export default CustomSnackbar;
