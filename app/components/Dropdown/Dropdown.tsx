import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import S from './styles';

export default function Dropdown({
  data,
  placeholder = '',
  multiple = true,
  search = false,
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value && (
          <MaterialIcons name='done' color='#a94bf3' size={20} />
        )}
      </View>
    );
  };

  const renderLabel = (
    <S.InputLabelBG colors={['#081E23', '#081E23', '#031013']}>
      <S.InputLabel>{placeholder}</S.InputLabel>
    </S.InputLabelBG>
  );

  return (
    <>
      {multiple ? (
        <View style={styles.container}>
          {renderLabel}
          <S.MultiDropdownList
            style={[
              styles.dropdown,
              (isFocus || value) && { borderColor: '#a94bf3' },
            ]}
            onChange={(item) => {
              setSelected(item);
            }}
            data={data}
            value={selected}
            labelField='label'
            valueField='value'
            search
            searchPlaceholder='Search...'
            placeholder={`Select ${placeholder.toLocaleLowerCase()}`}
            placeholderStyle={styles.placeholderStyle}
            iconStyle={styles2.iconStyle}
            selectedStyle={styles2.selectedStyle}
            itemTextStyle={styles.selectedTextStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles2.searchBoxStyle}
            containerStyle={styles.itemContainerStyle}
            maxSelect={4}
            activeColor='#A94BF3'
            maxHeight={210}
          />
        </View>
      ) : (
        <View style={styles.container}>
          {renderLabel}
          <S.DropdownList
            style={[
              styles.dropdown,
              (isFocus || value) && { borderColor: '#a94bf3' },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles2.searchBoxStyle}
            iconStyle={styles.iconStyle}
            itemTextStyle={styles.itemTextStyle}
            containerStyle={styles.itemContainerStyle}
            selectedStyle={styles2.selectedStyle}
            data={data}
            maxHeight={300}
            search={search}
            labelField='label'
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            valueField='value'
            placeholder={`Select ${placeholder.toLocaleLowerCase()}`}
            searchPlaceholder='Search...'
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
            activeColor='#A94BF3'
          ></S.DropdownList>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#081E23',
    borderRadius: 10,
  },
  dropdown: {
    height: 50,
    borderColor: '#736d78',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#031013',
    paddingHorizontal: 8,
    color: '#FFFFFF',
  },
  icon: {
    marginRight: 5,
  },
  itemContainerStyle: {
    marginTop: 10,
    borderColor: '#A94BF3',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#000',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#030D0F',
  },
  itemTextStyle: {
    color: '#FFFFFF',
    fontFamily: 'JockeyOne_400Regular',
  },
  label: {
    position: 'absolute',
    backgroundColor: '#081E23',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  textItem: {
    flex: 1,
    fontSize: 18,
    borderRadius: 10,
    color: 'white',
    fontFamily: 'JockeyOne_400Regular',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'JockeyOne_400Regular',
    paddingHorizontal: 8,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'JockeyOne_400Regular',
    paddingHorizontal: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

const styles2 = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'black',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
  searchBoxStyle: {
    borderColor: 'transparent',
    borderBlockEndColor: 'white',
    color: 'white',
    fontFamily: 'JockeyOne_400Regular',
  },
});
