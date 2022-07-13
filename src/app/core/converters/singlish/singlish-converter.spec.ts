import Converter from '../../converter';
import SinglishConverterBuilder from './singlish-converter-builder';

describe('Singlish Converter', () => {
    const converter: Converter = (new SinglishConverterBuilder()).get();

    describe('Vowels check', () => {
        it('[RUNTIME]: Generate vowels correctly', () => {
            expect('අ').toEqual(converter.convert('a').result);
            expect('ආ').toEqual(converter.convert('a', 'අ').result);
            expect('ඇ').toEqual(converter.convert('A').result);
            expect('ඈ').toEqual(converter.convert('a', 'ඇ').result);
            expect('ඈ').toEqual(converter.convert('e', 'අ').result);

            expect('ඉ').toEqual(converter.convert('i').result);
            expect('ඊ').toEqual(converter.convert('i', 'ඉ').result);
            expect('ඊ').toEqual(converter.convert('e', 'ඉ').result);
            expect('ඊ').toEqual(converter.convert('e', 'ඉ').result);

            expect('උ').toEqual(converter.convert('u').result);
            expect('ඌ').toEqual(converter.convert('u', 'උ').result);

            expect('එ').toEqual(converter.convert('e').result);
            expect('ඒ').toEqual(converter.convert('a', 'එ').result);

            expect('ඔ').toEqual(converter.convert('o').result);
            expect('ඕ').toEqual(converter.convert('e', 'ඔ').result);

            expect('ඖ').toEqual(converter.convert('u', 'අ').result);
        });

        it('[CONFIG]: Vowels Remove value is configured correctly', () => {
            expect(0).toEqual(converter.convert('a').remove);
            expect(1).toEqual(converter.convert('a', 'අ').remove);
            expect(0).toEqual(converter.convert('A').remove);
            expect(1).toEqual(converter.convert('a', 'ඇ').remove);
            expect(1).toEqual(converter.convert('e', 'අ').remove);

            expect(0).toEqual(converter.convert('i').remove);
            expect(1).toEqual(converter.convert('i', 'ඉ').remove);
            expect(1).toEqual(converter.convert('e', 'ඉ').remove);
            expect(1).toEqual(converter.convert('e', 'ඉ').remove);

            expect(0).toEqual(converter.convert('u').remove);
            expect(1).toEqual(converter.convert('u', 'උ').remove);

            expect(0).toEqual(converter.convert('e').remove);
            expect(1).toEqual(converter.convert('a', 'එ').remove);

            expect(0).toEqual(converter.convert('o').remove);
            expect(1).toEqual(converter.convert('e', 'ඔ').remove);

            expect(1).toEqual(converter.convert('u', 'අ').remove);
        });
    });

    describe('Consonants check', () => {
        it('[RUNTIME]: Generate hall consonants correctly', () => {
            // #1
            expect('ක්').toEqual(converter.convert('k').result);
            expect('ඛ්').toEqual(converter.convert('K').result);
            expect('ඛ්').toEqual(converter.convert('h', 'ක්').result);

            expect('ග්').toEqual(converter.convert('g').result);
            expect('ඝ්').toEqual(converter.convert('G').result);
            expect('ඝ්').toEqual(converter.convert('h', 'ග්').result);

            expect('ච්').toEqual(converter.convert('h', 'c').result);
            expect('ඡ්').toEqual(converter.convert('h', 'C').result);

            expect('ජ්').toEqual(converter.convert('j').result);
            expect('ඣ්').toEqual(converter.convert('J').result);
            expect('ඤ්').toEqual(converter.convert('N', 'ඛ්').result);

            // #2
            expect('ට්').toEqual(converter.convert('t').result);
            expect('ඨ්').toEqual(converter.convert('T').result);

            expect('ඩ්').toEqual(converter.convert('d').result);
            expect('ඪ්').toEqual(converter.convert('D').result);

            expect('ණ්').toEqual(converter.convert('N').result);
            expect('ඬ්').toEqual(converter.convert('d', 'න්න්').result);
            expect('ඟ්').toEqual(converter.convert('g', 'න්න්').result);

            expect('ත්').toEqual(converter.convert('h', 'ට්').result);
            expect('ථ්').toEqual(converter.convert('h', 'ඨ්').result);

            expect('ද්').toEqual(converter.convert('h', 'ඩ්').result);
            expect('ධ්').toEqual(converter.convert('h', 'ඪ්').result);

            expect('න්').toEqual(converter.convert('n').result);

            expect('ඳ්').toEqual(converter.convert('h', 'ඬ්').result);

            // #3
            expect('ප්').toEqual(converter.convert('p').result);
            expect('ඵ්').toEqual(converter.convert('P').result);
            expect('ඵ්').toEqual(converter.convert('h', 'ප්').result);

            expect('බ්').toEqual(converter.convert('b').result);
            expect('භ්').toEqual(converter.convert('h', 'බ්').result);

            expect('ම්').toEqual(converter.convert('m').result);
            expect('ඹ්').toEqual(converter.convert('B').result);
            expect('ය්').toEqual(converter.convert('y').result);
            expect('ර්').toEqual(converter.convert('r').result);
            expect('ල්').toEqual(converter.convert('l').result);
            expect('ව්').toEqual(converter.convert('w').result);
            expect('ව්').toEqual(converter.convert('v').result);
            expect('ළ්').toEqual(converter.convert('L').result);

            // #4
            expect('ශ්').toEqual(converter.convert('h', 'ස්').result);
            expect('ෂ්').toEqual(converter.convert('h', 'S').result);
            expect('ස්').toEqual(converter.convert('s').result);
            expect('හ්').toEqual(converter.convert('h').result);
            expect('ෆ්').toEqual(converter.convert('f').result);
        });

        it('[CONFIG]: Consonant remove value is configured correctly', () => {
            // #1
            expect(0).toEqual(converter.convert('k').remove);
            expect(0).toEqual(converter.convert('K').remove);
            expect(2).toEqual(converter.convert('h', 'ක්').remove);

            expect(0).toEqual(converter.convert('g').remove);
            expect(0).toEqual(converter.convert('G').remove);
            expect(2).toEqual(converter.convert('h', 'ග්').remove);

            expect(1).toEqual(converter.convert('h', 'c').remove);
            expect(1).toEqual(converter.convert('h', 'C').remove);

            expect(0).toEqual(converter.convert('j').remove);
            expect(0).toEqual(converter.convert('J').remove);
            expect(2).toEqual(converter.convert('N', 'ඛ්').remove);

            // #2
            expect(0).toEqual(converter.convert('t').remove);
            expect(0).toEqual(converter.convert('T').remove);

            expect(0).toEqual(converter.convert('d').remove);
            expect(0).toEqual(converter.convert('D').remove);

            expect(0).toEqual(converter.convert('N').remove);
            expect(4).toEqual(converter.convert('d', 'න්න්').remove);

            expect(2).toEqual(converter.convert('h', 'ට්').remove);
            expect(2).toEqual(converter.convert('h', 'ඨ්').remove);

            expect(2).toEqual(converter.convert('h', 'ඩ්').remove);
            expect(2).toEqual(converter.convert('h', 'ඪ්').remove);

            expect(0).toEqual(converter.convert('n').remove);

            expect(2).toEqual(converter.convert('h', 'ඬ්').remove);

            // #3
            expect(0).toEqual(converter.convert('p').remove);
            expect(0).toEqual(converter.convert('P').remove);
            expect(2).toEqual(converter.convert('h', 'ප්').remove);

            expect(0).toEqual(converter.convert('b').remove);
            expect(2).toEqual(converter.convert('h', 'බ්').remove);

            expect(0).toEqual(converter.convert('m').remove);
            expect(0).toEqual(converter.convert('B').remove);
            expect(0).toEqual(converter.convert('y').remove);
            expect(0).toEqual(converter.convert('r').remove);
            expect(0).toEqual(converter.convert('l').remove);
            expect(0).toEqual(converter.convert('w').remove);
            expect(0).toEqual(converter.convert('v').remove);
            expect(0).toEqual(converter.convert('L').remove);

            // #4
            expect(2).toEqual(converter.convert('h', 'ස්').remove);
            expect(1).toEqual(converter.convert('h', 'S').remove);
            expect(0).toEqual(converter.convert('s').remove);
            expect(0).toEqual(converter.convert('h').remove);
            expect(0).toEqual(converter.convert('f').remove);
        });
    });

    describe('Consonants modifier check', () => {
        it('[RUNTIME + CONFIG]: Generate Vowel diacritics with consonant', () => {
            expect('').toEqual(converter.convert('a', 'ක්').result);
            expect(1).toEqual(converter.convert('a', 'ක්').remove);

            expect('ා').toEqual(converter.convert('a', 'ක').result);
            expect(0).toEqual(converter.convert('a', 'ක').remove);

            expect('ැ').toEqual(converter.convert('A', 'ක්').result);
            expect(1).toEqual(converter.convert('A', 'ක්').remove);

            expect('ෑ').toEqual(converter.convert('a', 'කැ').result);
            expect('ෑ').toEqual(converter.convert('e', 'කැ').result);
            expect('ෑ').toEqual(converter.convert('e', 'ක').result);
            expect(1).toEqual(converter.convert('a', 'කැ').remove);
            expect(1).toEqual(converter.convert('e', 'කැ').remove);
            expect(0).toEqual(converter.convert('e', 'ක').remove);

            expect('ි').toEqual(converter.convert('i', 'ක්').result);
            expect(1).toEqual(converter.convert('i', 'ක්').remove);

            expect('ී').toEqual(converter.convert('i', 'කි').result);
            expect('ී').toEqual(converter.convert('e', 'කි').result);
            expect(1).toEqual(converter.convert('i', 'කි').remove);
            expect(1).toEqual(converter.convert('e', 'කි').remove);

            expect('ු').toEqual(converter.convert('u', 'ක්').result);
            expect(1).toEqual(converter.convert('u', 'ක්').remove);

            expect('ූ').toEqual(converter.convert('u', 'කු').result);
            expect(1).toEqual(converter.convert('u', 'කු').remove);

            expect('ෘ').toEqual(converter.convert('u', 'ක්‍ර්').result);
            expect(4).toEqual(converter.convert('u', 'ක්‍ර්').remove);

            expect('ෲ').toEqual(converter.convert('u', 'කෘ').result);
            expect(1).toEqual(converter.convert('u', 'කෘ').remove);

            expect('ෙ').toEqual(converter.convert('e', 'ක්').result);
            expect(1).toEqual(converter.convert('e', 'ක්').remove);

            expect('ේ').toEqual(converter.convert('a', 'කෙ').result);
            expect(1).toEqual(converter.convert('a', 'කෙ').remove);

            expect('ො').toEqual(converter.convert('o', 'ක්').result);
            expect(1).toEqual(converter.convert('o', 'ක්').remove);

            expect('ෝ').toEqual(converter.convert('a', 'කො').result);
            expect('ෝ').toEqual(converter.convert('e', 'කො').result);
            expect(1).toEqual(converter.convert('a', 'කො').remove);
            expect(1).toEqual(converter.convert('e', 'කො').remove);

            expect('ෞ').toEqual(converter.convert('u', 'ක').result);
            expect(0).toEqual(converter.convert('u', 'ක').remove);

            expect('ෞ').toEqual(converter.convert('U', 'ක්').result);
            expect(1).toEqual(converter.convert('U', 'ක්').remove);

            expect('ං').toEqual(converter.convert('x', 'ක්').result);
            expect(1).toEqual(converter.convert('x', 'ක්').remove);

            expect('ං').toEqual(converter.convert('x', 'ක').result);
            expect(0).toEqual(converter.convert('x', 'ක').remove);

            expect('ං').toEqual(converter.convert('x', 'කෙ').result);
            expect(0).toEqual(converter.convert('x', 'කෙ').remove);

            expect('ඃ').toEqual(converter.convert('X', 'ක්').result);
            expect(1).toEqual(converter.convert('X', 'ක්').remove);

            expect('ඃ').toEqual(converter.convert('X', 'ක').result);
            expect(0).toEqual(converter.convert('X', 'ක').remove);

            expect('ඃ').toEqual(converter.convert('X', 'කෙ').result);
            expect(0).toEqual(converter.convert('X', 'කෙ').remove);

            expect('්‍ර්').toEqual(converter.convert('r', 'ක්').result);
            expect(1).toEqual(converter.convert('r', 'ක්').remove);

            expect('ර්').toEqual(converter.convert('r', 'ක').result);
            expect(0).toEqual(converter.convert('r', 'ක').remove);

            expect('්‍ය්').toEqual(converter.convert('Y', 'ක්').result);
            expect(1).toEqual(converter.convert('Y', 'ක්').remove);

            expect('').toEqual(converter.convert('a', 'ක්‍ය්').result);
            expect(1).toEqual(converter.convert('a', 'ක්‍ය්').remove);

            expect('ෛ').toEqual(converter.convert('I', '්').result);
            expect(1).toEqual(converter.convert('I', '්').remove);
        });
    });
});
