import React from "react";
import { Text, TouchableOpacity, View, Image } from 'react-native';
import generalStyles from "../../../styles/generalStyles";
import { Icons } from "../../../assets/icons";
import homeStyles from "../homeStyles";

const HomeMainView = props => {
  return (
    <View style={generalStyles.container}>
      {/* Thông tin chung */}
      <View style={homeStyles.container}>
        <View style={homeStyles.columnContainer}>
          <View style={homeStyles.centeredTextContainer}>
            <Text>Số tòa nhà</Text>
            <Text>0</Text>
          </View>
          <View style={homeStyles.centeredTextContainer}>
            <Text>Số người thuê</Text>
            <Text>0</Text>
          </View>
        </View>
        <View style={homeStyles.columnContainer}>
          <View style={homeStyles.centeredTextContainer}>
            <Text>Số phòng</Text>
            <Text>0</Text>
          </View>
          <View style={homeStyles.centeredTextContainer}>
            <Text>Số phòng trống</Text>
            <Text>0</Text>
          </View>
        </View>
      </View>

      <View style={[homeStyles.containerColumn, { gap: 40 }]}>
        {[
          [
            { icon: Icons.iconService, label: 'Dịch vụ' },
            { icon: Icons.iconPipe, label: 'Chốt điện nước' },
            { icon: Icons.iconInvoice, label: 'Hóa đơn' },
          ],
          [
            { icon: Icons.iconProfile, label: 'Người thuê' },
            { icon: Icons.iconAlert, label: 'Sự cố' },
            { icon: Icons.iconContract, label: 'Hợp đồng' },
          ],
          [
            { icon: Icons.iconCoin, label: 'Cọc giữ chô' },
            { icon: Icons.iconBill, label: 'Sổ nợ' },
            { icon: Icons.iconSale, label: 'Đẩy phòng' },
          ],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={homeStyles.flexRow}>
            {row.map((item, itemIndex) => (
              <TouchableOpacity key={itemIndex} style={homeStyles.iconButtonContainer}>
                <Image style={{ height: 40, width: 40 }} source={item.icon} />
                <Text>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeMainView;
