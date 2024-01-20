import { color, GIVER_CASUAL_NAVY } from "#theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(17, 17, 17, 0.25)",
  },
  modalView: {
    alignItems: "center",

    paddingTop: 60,
    paddingBottom: 16,

    paddingHorizontal: 16,

    backgroundColor: color.palette.white,
    borderRadius: 8,
  },
  modalYesBtn: {
    flex: 1,
    alignItems: "center",

    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 2,
    borderColor: GIVER_CASUAL_NAVY,

    paddingVertical: 16,
  },
  modalNoBtn: {
    flex: 1,
    alignItems: "center",

    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 2,
    borderColor: GIVER_CASUAL_NAVY,

    backgroundColor: GIVER_CASUAL_NAVY,

    paddingVertical: 16,
  },
  subtitle: {
    marginTop: 8,
    textAlign: "center",
  },
})
