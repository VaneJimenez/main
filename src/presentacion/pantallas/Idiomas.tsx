import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export const Idiomas = () => {


    const [idIdioma, setIdIdioma] = useState('');
    const [nombre, setNombre] = useState('');
    const [isoCode, setIsoCode] = useState('');
    

    const agregarIdioma = () => {
        if (idIdioma && nombre && isoCode) {
            setIdIdioma('')
            setNombre('')
        }
    }

    return (
        <View>

            <Text>
                Agregar Idioma
            </Text>

            <TextInput
                placeholder='id'
                value={idIdioma}
                onChangeText={text => setIdIdioma(text)}
            />
            <TextInput
                placeholder='Nombre'
                value={nombre}
                onChangeText={text => setNombre(text)}
            />
            <TextInput
                placeholder='IsoCode'
                value={isoCode}
                onChangeText={text => setIsoCode(text)}
            />
            

            <Button title="Agregar idioma" onPress={agregarIdioma} />


            

        </View>
    )
}