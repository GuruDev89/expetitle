import {StyleSheet, Platform} from 'react-native';
import {Metrics, Adjust, Fonts, Colors, Images} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f8fd', //'#F6F7F9',
    display: 'flex',
  },
  propertyDetailsView: {
    width: '100%',
    backgroundColor: '#83b1ff',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  propertyDetailsText: {
    textAlign: 'center',
    width: '70%',
    fontSize: 19,
    fontFamily: 'Roboto-Medium',
    color: '#FFF',
    alignSelf: 'center',
  },
  recipentInputView: {
    height: Adjust(45),
    width: Adjust(345),
    justifyContent: 'center',
    marginTop: Adjust(-45),
    paddingLeft: 10,
    backgroundColor: 'white',
  },
  recipentInputText: {
    color: Colors.placeholder,
    fontSize: 20,
  },
  recipentsView: {
    width: Adjust(345),
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recipentItemView: {
    backgroundColor: Colors.orange,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: Adjust(20),
    height: Adjust(40),
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  label: {
    marginTop: 10,
    width: Adjust(345),
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#858FA1',
    paddingVertical: 8,
  },
  whatwould: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#858FA1',
    paddingVertical: 8,
  },
  buttonStyle: {
    backgroundColor: '#4b8eff',
  },
  rightIconStyle: {
    fontSize: 21,
    fontFamily: 'Roboto-Medium',
    color: 'white',
    width: '50%',
    marginLeft: 40,
  },
  scrollViewContent: {
    flexGrow: 1,
    display: 'flex',
    paddingBottom: 100,
  },
  scrollView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  mainView: {
    alignItems: 'center',
    borderWidth: 0.2,
    borderRadius: 8,
    backgroundColor: '#FFF',
    borderColor: '#aaa',
    height: 50,
  },
  subjectStyle: {
    width: Adjust(345),
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
    borderWidth: 0.2,
    borderRadius: 8,
    backgroundColor: '#FFF',
    borderColor: '#aaa',
    paddingHorizontal: 10,
    height: 50,
  },
  messageStyle: {
    width: Adjust(345),
    fontFamily: 'Poppins-Regular',
    fontSize: 19,
    borderWidth: 0.2,
    borderRadius: 8,
    backgroundColor: '#FFF',
    borderColor: '#ccc',
    height: 155,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
  },
  checkboxRowView: {paddingVertical: 8},
  checkboxRow: {
    backgroundColor: '#F6F7F9',
    borderBottomWidth: 0,
    height: 40,
    right: 10,
  },
  documentsList: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#858FA1',
    marginLeft: 10,
    textDecorationLine: 'underline',
  },
  documentsListChecksView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
  },
  checkboxIcon: {height: 25, width: 25},
  bottomView: {
    backgroundColor: '#FFF',
    height: 80,
    justifyContent: 'center',
    width: '100%',
  },
  buttonView: {
    backgroundColor: '#4b8eff',
    width: '90%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  sentButtonView: {
    backgroundColor: '#4b8eff',
    width: '90%',
    alignSelf: 'center',
    height: 55,
    borderRadius: 50,
    justifyContent: 'center',
  },
  fieldRequire: {
    color: 'grey',
    fontFamily: 'Poppins-Regular',
  },
  warnView: {
    flexDirection: 'row',
    top: 5,
  },
  warnImage: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  // AUTOCOMPLETE //
  customTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: '100%',
  },
  customTag: {
    backgroundColor: '#DAE8FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    padding: 8,
  },
  customRenderTags: {
    color: '#494949',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  separatorLine: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
  },
  autocompleteContainer: {
    flex: 1,
    zIndex: 1,
    backgroundColor: '#FFF',
    overflow: 'visible',
    position: 'relative',
    zIndex: 999,
    borderRadius: 10,
  },
  inputContainerStyle: {
    borderRadius: 0,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopColor: '#FFF',
    paddingLeft: 5,
    height: 50,
    width: 300,
    justifyContent: 'center',
    borderColor: 'transparent',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
  },
  containerStyle: {
    minWidth: '100%',
    maxWidth: '100%',
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  listContainerStyle: {
    backgroundColor: '#F4F4F4',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  listStyle: {
    maxHeight: Platform.OS === 'ios' ? 250 : 220,
    borderColor: 'transparent',
    backgroundColor: '#F4F4F4',
  },
  autoCompleteStyle: {
    backgroundColor: '#FFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#000',
    paddingVertical: 8,
  },

  // SENT //
  sentContainer: {backgroundColor: '#FFF', flex: 1},
  sentImage: {
    height: Adjust(200),
    width: Adjust(250),
    alignSelf: 'center',
    margin: 80,
    top: 50,
    resizeMode: 'contain',
  },
  sentText: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    color: '#6e7c92',
    textAlign: 'center',
    bottom: 10,
  },
  sentBackText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
