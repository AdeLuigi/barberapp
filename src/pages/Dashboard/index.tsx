import React from 'react';
import { View, Button, TextInput, Text, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Icon } from './styles';
import { useAuth } from '../../hooks/auth';
import styled from 'styled-components/native';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
  <KeyboardAvoidingView behavior="height" style={{flex:1}}>
    <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor:'#FFFFFF'}}>
     <View style={{ flex:1}}>
     <View style={{backgroundColor:'#FFFFFF', flexDirection:'row', justifyContent: 'space-between',alignContent:'space-around', height:60, borderBottomColor:'#E4E4E4', borderBottomWidth:1}}>
        <View style={{justifyContent:'center', marginLeft:16}}>
          <Icon
            name='arrow-left'
            size={32}
          />
        </View>
        <View style={{justifyContent:'center',marginRight:16}}>
        <Text style={{fontFamily:'RobotoSlab-Medium', fontSize:22, color:'#304FFE', fontWeight:'bold'}}> Publicar</Text>
        </View>
      </View>
      <View style={{marginTop:8, marginLeft:16, flexDirection:'row', }}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image
          style={{width:50, height:50, borderRadius:25}}
          source={{
            uri:'https://avatars.githubusercontent.com/u/31490653?s=460&u=40fd82db67ea884a48d44a881105120dc35b9c9c&v=4'
          }}
        />
        </View>
        <View style={{marginLeft:10, justifyContent:'center'}}>
          <Text style={{fontFamily:'RobotoSlab-Medium', fontSize:15, fontWeight:'bold'}}>Sanderson de Paula</Text>
          <Text style={{fontFamily:'RobotoSlab-Regular'}}>Public</Text>
        </View>


      </View>
      <View style={{backgroundColor:'#FFFFFF'}}>
        <TextInput
          style={{margin:16, fontFamily:'RobotoSlab-Bold', fontSize:18, justifyContent:'flex-start', alignItems:'flex-start',textAlign:'left',padding:0,}}
          editable
          multiline
          underlineColorAndroid="transparent"
          numberOfLines={2}
          placeholder="O que você está pensando?"
        />
      </View>
     </View>
      <View style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          borderTopEndRadius:16,
          borderTopLeftRadius:16,
          elevation: 3,
      }}>
        <View style={{alignItems:'center',marginTop:16}}>
          <View style={{width:32, height:4, backgroundColor: '#E4E4E4'}}></View>
        </View>
        <Text style={{color:'#B2B2B2',fontSize:14, fontFamily:'RobotoSlab-Bold', fontWeight:'bold', marginLeft:16, marginTop:32, marginBottom:16}}>Arquivos</Text>

        <ScrollView horizontal style={{ borderBottomColor:'#E4E4E4', borderBottomWidth:1, paddingBottom:20}}>
          <View style={{flexDirection:'row', alignItems:'center', marginLeft:16}}>
            <View style={{backgroundColor:'#304FFE', width:55, height:55, flex:1, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                <Icon size={35} color={'#FFF'} name='camera'/>
            </View>
            <Text style={{marginLeft:8, fontFamily:'RobotoSlab-Bold',fontWeight:'bold', fontSize:20, color:'black'}}>Fotos</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', marginLeft:16}}>
            <View style={{backgroundColor:'#304FFE', width:55, height:55, flex:1, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                <Icon size={35} color={'#FFF'} name='map-pin'/>
            </View>
            <Text style={{marginLeft:8, fontFamily:'RobotoSlab-Bold',fontWeight:'bold', fontSize:20, color:'black'}}>Fotos</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', marginLeft:16}}>
            <View style={{backgroundColor:'#304FFE', width:55, height:55, flex:1, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                <Icon size={35} color={'#FFF'} name='file-text'/>
            </View>
            <Text style={{marginLeft:8, fontFamily:'RobotoSlab-Bold',fontWeight:'bold', fontSize:20, color:'black'}}>Fotos</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center', marginLeft:16}}>
            <View style={{backgroundColor:'#304FFE', width:55, height:55, flex:1, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                <Icon size={35} color={'#FFF'} name='video'/>
            </View>
            <Text style={{marginLeft:8, fontFamily:'RobotoSlab-Bold',fontWeight:'bold', fontSize:20, color:'black'}}>Fotos</Text>
          </View>
        </ScrollView>

        <View style={{marginBottom:16}}>
          <Text style={{color:'#B2B2B2',fontSize:14, fontFamily:'RobotoSlab-Bold', fontWeight:'bold', marginLeft:16, marginTop:16, marginBottom:16}}>Grupos</Text>
          <ScrollView horizontal>

            <View style={{justifyContent:'center', alignItems:'center',marginLeft:16}}>
              <View>
                <View style={{backgroundColor:'#304FFE', width:56, height:56, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                    <Image
                    style={{width:50, height:50, borderRadius:25}}
                    source={{
                      uri:'https://pbs.twimg.com/profile_images/1247668157155815425/sRvAjVuM_400x400.jpg'
                    }}
                  />
                </View>
              </View>
              <Text style={{fontFamily:'RobotoSlab-Bold', color:'#304FFE', fontWeight:'bold'}}>Ilha</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center',marginLeft:12}}>
              <View>
                <View style={{width:55, height:55, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                    <Image
                    style={{width:50, height:50, borderRadius:25}}
                    source={{
                      uri:'http://cm1.narvii.com/6780/927a4af07b443bbdbe730956b6f6b05168fc9628_00.jpg'
                    }}
                  />
                </View>
              </View>
              <Text style={{fontFamily:'RobotoSlab-Bold', color:'black'}}>SAM</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center',marginLeft:12}}>
              <View>
                <View style={{width:55, height:55, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                    <Image
                    style={{width:50, height:50, borderRadius:25}}
                    source={{
                      uri:'https://scontent.fsdu7-1.fna.fbcdn.net/v/t1.0-9/36840059_483841668705112_6624769256288419840_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Dbbg3xjOnyEAX85H4y3&_nc_ht=scontent.fsdu7-1.fna&oh=98ab601bb11c29785979d3e25b21cb0f&oe=606A48A0'
                    }}
                  />
                </View>
              </View>
              <Text style={{fontFamily:'RobotoSlab-Bold', color:'black'}}>Mordox</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center',marginLeft:12}}>
              <View>
                <View style={{width:55, height:55, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                    <Image
                    style={{width:50, height:50, borderRadius:25}}
                    source={{
                      uri:'https://static.wixstatic.com/media/d69c47_9294b6550a3c45e9aaffa6d9a9999168~mv2.png/v1/fill/w_1233,h_809,fp_0.50_0.50/d69c47_9294b6550a3c45e9aaffa6d9a9999168~mv2.png'
                    }}
                  />
                </View>
              </View>
              <Text style={{fontFamily:'RobotoSlab-Bold', color:'black'}}>SAC</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center',marginLeft:12}}>
              <View>
                <View style={{width:55, height:55, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                    <Image
                    style={{width:50, height:50, borderRadius:25}}
                    source={{
                      uri:'https://pbs.twimg.com/profile_images/730493939527110656/1tmRuVLp.jpg'
                    }}
                  />
                </View>
              </View>
              <Text style={{fontFamily:'RobotoSlab-Bold', color:'black'}}>PPA</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', marginLeft:12}}>
              <View>
                <View style={{width:55, height:55, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                    <Image
                    style={{width:50, height:50, borderRadius:25}}
                    source={{
                      uri:'https://i.servimg.com/u/f97/19/56/35/52/otut3n10.png'
                    }}
                  />
                </View>
              </View>
              <Text style={{fontFamily:'RobotoSlab-Bold', color:'black'}}>CDG</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center',marginLeft:12}}>
              <View>
                <View style={{width:55, height:55, alignItems:'center', justifyContent:'center', borderRadius:27}}>
                    <Image
                    style={{width:50, height:50, borderRadius:25}}
                    source={{
                      uri:'https://pm1.narvii.com/6444/26cecd43efd37f80a07c92d095e8b70591c8fa51_hq.jpg'
                    }}
                  />
                </View>
              </View>
              <Text style={{fontFamily:'RobotoSlab-Bold', color:'black'}}>Dava</Text>
            </View>


          </ScrollView>
        </View>
      </View>


      {/* <Button title="Sair" onPress={signOut} /> */}
    </View>
  </KeyboardAvoidingView>
  );
};

export default Dashboard;
