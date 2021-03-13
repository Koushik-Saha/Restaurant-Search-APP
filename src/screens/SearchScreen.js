import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [result, setResult] = useState([]);

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'NYC'
                }
            });
            setResult(response.data)
        }
        catch (error) {
            console.error(error);
        }
    }

    console.log(result)

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>Search Screen</Text>
            <Text>We have found {result.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
