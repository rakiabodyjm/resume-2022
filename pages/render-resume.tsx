import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Resume from "pages/resume";

const styles = StyleSheet.create({});
export default function RenderResumePage() {
  <PDFViewer>
    <Document>
      <Page size="LETTER">
        <View>
          <Resume />
        </View>
      </Page>
    </Document>
  </PDFViewer>;
}
