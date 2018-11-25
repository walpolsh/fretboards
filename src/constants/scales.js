


const permuteAlt = (arr, i) => {
  const arr2 = []
  const chunk1 = arr.slice(0, i)
  const chunk2 = arr.slice(i, arr.length)
  arr2.push( chunk2.concat(chunk1))
  return arr2
}
// 1  2  3  4  5  6  7

//[0, 2, 4, 5, 7, 9, 11]

const Hirojoshi1 = [[''],[0,2,3,7,8],['Hirojoshi Mode 1'],['']]
const Hirojoshi2 = [[''],[0,1,5,6,10],['Hirojoshi Mode 2'],['']]
const Hirojoshi3 = [[''],[0,4,5,9,11],['Hirojoshi Mode 3'],['']]
const Hirojoshi4 = [[''],[0,1,5,7,8],['Hirojoshi Mode 4'],['']]
const Hirojoshi5 = [[''],[0,4,6,7,11],['Hirojoshi Mode 5'],['']]

export const Hirojoshi = [Hirojoshi1, Hirojoshi2, Hirojoshi3,Hirojoshi4,Hirojoshi5]

const KuMode1 = [[''],[0,2,3,7,9],['Kumoi Mode 1'],['']]
const KuMode2 = [[''],[0,1,5,7,10],['Kumoi Mode 2'],['']]
const KuMode3 = [[''],[0,1,6,9,11],['Kumoi Mode 3'],['']]
const KuMode4 = [[''],[0,2,5,7,8],['Kumoi Mode 4'],['']]
const KuMode5 = [[''],[0,3,5,6,10],['Kumoi Mode 5'],['']]

export const Kumoi = [KuMode1, KuMode2, KuMode3, KuMode4, KuMode5]

const MinorPenta = [[''], [0, 3, 5, 7, 10], ["Minor Pentatonic"],['']]
const MajorPenta = [[''], [0, 2, 4, 7, 9], ["Major Pentatonic"],['']]
const Mode3 = [[''], [0, 2, 5, 7, 10], ["Pentatonic Mode 3"],['']]
const Mode4 = [[''], [0, 3, 5, 8, 10], ["Pentatonic Mode 4"],['']]
const Mode5 = [[''], [0, 2, 5, 7, 9], ["Pentatonic Mode 5"],['']]

export const Pentatonic = [MinorPenta, MajorPenta, Mode3, Mode4, Mode5]

const WholeTone = [[], [0,2,4,6,8,10],['Whole Tone'],['']]
const HalfWhole = [[], [0,1,3,4,6,7,9,10],['Half Whole Diminished'],['']]
const WholeHalf = [[], [0,2,3,5,6,8,9,11],['Whole Half Diminished'],['']]
const Augmented = [[], [0,3,4,7,8,11],['Augmented'],['']]
const Augmented2 = [[], [0,1,4,5,8,9],['Augmented 2'],['']]
const Tritone = [[], [0,1,4,6,7,10],['Tritone'],['']]


export const Symmetrical = [WholeTone, HalfWhole, WholeHalf, Augmented, Augmented2, Tritone]

//Chromatic Scale
export const Chromatic = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]

//Major
let majorChords = []

for (let i = 0; i < 7; i++) {
  majorChords.push(permuteAlt(["maj7", "min7", "min7", "maj7", "dom7", "min7", "min7b5"], i))
}

const Ionian = [['1', '2', '3', '4', '5', '6', '7'], [0, 2, 4, 5, 7, 9, 11],['Major'], [majorChords[0]]]
const Dorian = [['1','2','b3','4','5','6','b7'], [0, 2, 3, 5, 7, 9, 10], ['Dorian'], [majorChords[1]]]
const Phrygian = [['1', 'b2', 'b3', '4', '5', 'b6', 'b7'], [0, 1, 3, 5, 7, 8, 10], ['Phrygian'], [majorChords[2]]]
const Lydian = [['1', '2', '3', '#4', '5', '6 ', '7'], [0, 2, 4, 6, 7, 9, 11], ['Lydian'], [majorChords[3]]]
const Mixolydian = [['1', '2', '3', '4', '5', '6', 'b7'], [0, 2, 4, 5, 7, 9, 10], ['Mixolydian'], [majorChords[4]]]
const Aeolian = [['1', '2', 'b3', '4', '5', 'b6', 'b7'], [0, 2, 3, 5, 7, 8, 10], ['Aeolian'], [majorChords[5]]]
const Locrian = [['1', 'b2', 'b3', '4', 'b5', 'b6', 'b7'], [0, 1, 3, 5, 6, 8, 10], ['Locrian '], [majorChords[6]]]
export const Major = [Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian]


//Melodic Minor
let melodicMinorChords = []

for (let i = 0; i < 7; i++) {
  melodicMinorChords.push(permuteAlt(["min/maj7", "min7", "maj7#5", "dom7", "dom7", "min7b5", "min7b5"], i))
}

const Melodic = [['1', '2', 'b3', '4', '5', '6', '7'], [0, 2, 3, 5, 7, 9, 11],['Melodic Minor'], [melodicMinorChords[0]]]
const Dorianb2 = [['1','b2','b3','4','5','6','b7'], [0, 1, 3, 5, 7, 9, 10], ['Dorian b2'], [melodicMinorChords[1]]]
const LydianAug = [['1', '2', '3', '#4', '#5', '6', '7'], [0, 2, 4, 6, 8, 9, 11], ['Lydian #5'], [melodicMinorChords[2]]]
const LydianDom = [['1', '2', '3', '#4', '5', '6', 'b7'], [0, 2, 4, 6, 7, 9, 10], ['Lydian b7'], [melodicMinorChords[3]]]
const Mixolydianb6 = [['1', '2', '3', '4', '5', 'b6', 'b7'], [0, 2, 4, 5, 7, 8, 10], ['Mixolydian b6'], [melodicMinorChords[4]]]
const LocrianNat2 = [['1', '2', 'b3', '4', 'b5', 'b6', 'b7'], [0, 2, 3, 5, 6, 8, 10], ['Locrian ♮2'], [melodicMinorChords[5]]]
const Locrianb4 = [['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7'], [0, 1, 3, 4, 6, 8, 10], ['Locrian b4'], [melodicMinorChords[6]]]
export const MelodicMinor = [Melodic, Dorianb2, LydianAug, LydianDom, Mixolydianb6, LocrianNat2, Locrianb4]

//Harmonic Minor
let harmonicMinorChords = []

for (let i = 0; i < 7; i++) {
  harmonicMinorChords.push(permuteAlt(["min/maj7", "min7b5", "maj7#5", "min7", "dom7", "maj7", "dim7"], i))
}

const Harmonic = [['1', '2', 'b3', '4', '5', 'b6', '7'], [0, 2, 3, 5, 7, 8, 11],['Harmonic Minor'], [harmonicMinorChords[0]]]
const LocrianNat6 = [['1', 'b2', 'b3', '4', 'b5', '6', 'b7'], [0, 1, 3, 5, 6, 9, 10], ['Locrian ♮6'], [harmonicMinorChords[1]]]
const IonianSharp5 = [['1', '2', '3', '4', '#5', '6', '7'], [0, 2, 4, 5, 8, 9, 11], ['Ionian #5'], [harmonicMinorChords[2]]]
const DorianSharp4 = [['1', '2', 'b3', '#4', '5', '6', 'b7'], [0, 2, 3, 6, 7, 9, 10], ['Dorian #4'], [harmonicMinorChords[3]]]
const PhrygianNat3 = [['1', 'b2', '3', '4', '5', 'b6', 'b7'], [0, 1, 4, 5, 7, 8, 10], ['Phrygian ♮3'], [harmonicMinorChords[4]]]
const LydianSharp2 = [['1', '#2', '3', '#4', '5', '6', '7'], [0, 3, 4, 6, 7, 9, 11], ['Lydian #2'], [harmonicMinorChords[5]]]
const Locrianb4Alt7 = [['1', 'b2', 'b3', 'b4', 'b5', 'b6', 'bb7'], [0, 1, 3, 4, 6, 8, 9], ['Locrian b4 bb7'], [harmonicMinorChords[6]]]

export const HarmonicMinor = [Harmonic, LocrianNat6, IonianSharp5, DorianSharp4, PhrygianNat3, LydianSharp2, Locrianb4Alt7]

//Harmonic Major
let harmonicMajorChords = []

for (let i = 0; i < 7; i++) {
  harmonicMajorChords.push(permuteAlt(["maj7", "min7b5", "min7", "min/maj7", "dom7", "maj7#5", "dim7"], i))
}

const HarmonicMaj = [['1', '2', '3', '4', '5', 'b6', '7'], [0, 2, 4, 5, 7, 8, 11],['Harmonic Major'], [harmonicMajorChords[0]]]
const Dorianb5 = [['1', '2', 'b3', '4', 'b5', '6', 'b7'], [0, 2, 3, 5, 6, 9, 10], ['Dorian b5'], [harmonicMajorChords[1]]]
const Phrygianb4 = [['1', 'b2', 'b3', 'b4', '5', 'b6', 'b7'], [0, 1, 3, 4, 7, 8, 10], ['Phrygian b4'], [harmonicMajorChords[2]]]
const Lydianb3 = [['1', '2', 'b3', '#4', '5', '6', 'b7'], [0, 2, 3, 6, 7, 9, 10], ['Lydian b3'], [harmonicMajorChords[3]]]
const Mixolydianb2 = [['1', 'b2', '3', '4', '5', '6', 'b7'], [0, 1, 4, 5, 7, 8, 10], ['Dorian b2'], [harmonicMajorChords[4]]]

const LydianSharp2Sharp5 = [['1', '#2', '3', '#4', '#5', '6', '7'], [0, 3, 4, 6, 8, 9, 11], ['Lydian #2 #5'], [harmonicMajorChords[5]]]
const Locrianbb7 = [['1', 'b2', 'b3', '4', 'b5', 'b6', 'bb7'], [0, 1, 3, 4, 6, 8, 9], ['Locrian bb7'], [harmonicMajorChords[6]]]

export const HarmonicMajor = [HarmonicMaj, Dorianb5, Phrygianb4, Lydianb3, Mixolydianb2, LydianSharp2Sharp5, Locrianbb7]

// Hungarian Major
let hungarianMajorChords = []

for (let i = 0; i < 7; i++) {
  hungarianMajorChords.push(permuteAlt(["dom7", "dim7", "min7b5", "min7b5", "min/maj7b5", "min7", "min/bb7"], i))
}

const HungarianMaj = [['1','#2','3','#4','5','6','b7'], [0, 3, 4, 6, 7, 9, 10],['Hungarian Major'], [hungarianMajorChords[0]]]
const Altb6bb7 = [['1','b2','b3','b4','b5','bb6','bb7'], [0, 1, 3, 4, 6, 7, 9], ['Alt b6 bb7'], [hungarianMajorChords[1]]]
const Locrian27 = [['1','2','b3','4','b5','b6','7'], [0, 2, 3, 5, 6, 8, 11], ['Locrian ♮2 ♮7'], [hungarianMajorChords[2]]]
const Alt6 = [['1','b2','b3','b4','b5','6','b7'], [0, 1, 3, 4, 6, 9, 10], ['Alt ♮6'], [hungarianMajorChords[3]]]
const MelodicAugented = [['1','2','b3','4','#5','6','7'], [0, 2, 3, 5, 8, 9, 11], ['Melodic Augmented'], [hungarianMajorChords[4]]]
const Dorianb2Sharp4 = [['1','b2','b3','#4','5','6','b7'], [0, 1, 3, 6, 7, 9, 10], ['Dorian b2 #4'], [hungarianMajorChords[5]]]
const LydianAugSharp3 = [['1','b2','b3','b4','5','b6','bb7'], [0, 1, 3, 4, 7, 8, 9], ['Lydian Augmented #3'], [hungarianMajorChords[6]]]

// [0, 2, 4, 5, 7, 9, 11]

export const HungarianMajor = [ HungarianMaj, Altb6bb7, Locrian27, Alt6, MelodicAugented, Dorianb2Sharp4, LydianAugSharp3]


// Hungarian minor

let hungarianMinorChords = []

for (let i = 0; i < 7; i++) {
  hungarianMinorChords.push(permuteAlt(["min/maj7", "maj7/b5", "maj7/#5", "dim7/sus2", "maj7", "maj7", "min/bb7"], i))
}

const HungarianMin = [['1','2','b3','#4','5','b6','7'], [0, 2, 3, 6, 7, 8, 11],['Hungarian Minor'], [hungarianMinorChords[0]]]
const Oriental = [['1','b2','3','4','b5','6','b7'], [0, 1, 4, 5, 6, 9, 10], ['Oriental'], [hungarianMinorChords[1]]]
const IonianAugmented2 = [['1','#2','3','4','#5','6','7'], [0, 3, 4, 5, 8, 9, 11], ['Ionian Augmented 2'], [hungarianMinorChords[2]]]
const Locrainbb3bb7 = [['1','b2','bb3','4','b5','b6','bb7'], [0, 1, 2, 5, 6, 8, 9], ['Locrain bb3 bb7'], [hungarianMinorChords[3]]]
const DoubleHarmonic = [['1','b2','3','4','5','b6','7'], [0, 1, 4, 5, 7, 8, 11], ['Double Harmonic'], [hungarianMinorChords[4]]]
const LydianSharp2Sharp6 = [['1','#2','3','#4','5','#6','7'], [0, 3, 4, 6, 7, 10, 11], ['Lydian #2 #6'], [hungarianMinorChords[5]]]
const Phyrgianb4bb7 = [['1','b2','b3','b4','5','b6','bb7'], [0, 1, 3, 4, 7, 8, 9], ['Phyrgian b4 bb7'], [hungarianMinorChords[6]]]

export const HungarianMinor = [ HungarianMin, Oriental, IonianAugmented2, Locrainbb3bb7, DoubleHarmonic, LydianSharp2Sharp6, Phyrgianb4bb7]


// Neapolitan Minor
let neapolitanMinorChords = []

for (let i = 0; i < 7; i++) {
  neapolitanMinorChords.push(permuteAlt(['min/maj7', 'maj7', 'dom7', 'minor7', 'dom7/b5', 'maj7', 'dim7/sus2'], i))
}


const Neapolitan =  [['1','b2','b3','4','5','b6','7'], [0, 1, 3, 5, 7, 8, 11] , ['Neapolitan'], [neapolitanMinorChords[0]]]
const LydianSharp6 = [ ['1','2','3','#4','5', '#6', '7'], [0, 2, 4, 6, 7, 10, 11], ['Lydian #6'], [neapolitanMinorChords[1]]]
const DominantSharp5 = [['1','2','3','4','#5','6','b7'], [0, 2, 4, 5, 8, 9, 11], ['Dominant #5'], [neapolitanMinorChords[2]]]
const AeoleanSharp4 = [['1','2','b3','#4','5','b6','b7'], [0, 2, 3, 6, 7, 8, 10], ['Aeolean #4'], [neapolitanMinorChords[3]]]
const LocrianNat3 = [['1','b2','3','4','b5','b6','b7'], [0, 1, 4, 5, 6, 8, 10], ['Locrian ♮3'], [neapolitanMinorChords[4]]]
const IonianSharp2 = [['1','#2','3','4','5','6','7'], [0, 3, 4, 5, 7, 9, 11], ['Ionian #2'], [neapolitanMinorChords[5]]]
const Altb3bb7 = [['1','b2','bb3','b4','b5','b6','bb7'], [0, 1, 2, 4, 6, 8, 9], ['Alt b3 bb7'], [neapolitanMinorChords[6]]]

export const NeapolitanMinor = [Neapolitan, LydianSharp6, DominantSharp5, AeoleanSharp4, LocrianNat3, IonianSharp2, Altb3bb7]

//Neapolitan Major

let neapolitanMajorChords = []

for (let i = 0; i < 7; i++) {
  neapolitanMajorChords.push(permuteAlt(['min/maj7', 'maj7/#5', 'dom7/#5', 'dom7', 'dom7/b5', 'dim7', 'dim7/sus2'], i))
}


const NeapolitanMaj =  [['1', 'b2', 'b3', '4', '5', '6', '7'], [0, 1, 3, 5, 7, 9, 11] , ['Neapolitan Major'], [neapolitanMajorChords[0]]]
const LydianAugSharp6 = [ ['1', '2', '3', '#4', '#5', '#6', '7'], [0, 2, 4, 6, 8, 10, 11] , ['Lydian Augmented #6'], [neapolitanMajorChords[1]]]
const LydianDomSharp5 = [['1','2','3','#4','#5','#6','7'], [0, 2, 4, 6, 8, 10, 11] , ['Lydian Dominant #5'], [neapolitanMajorChords[2]]]
const LydianMinor = [['1','2','3','#4','#5','6','b7'], [0, 2, 4, 6, 8, 9, 10] , ['Lydian Minor'], [neapolitanMajorChords[3]]]
const MajorLocrian = [['1','2','3','4','b5','b6','b7'], [0, 2, 4, 5, 6, 8, 10] , ['Major Locrian'], [neapolitanMajorChords[4]]]
const AltNat2 = [['1','2','b3','b4','b5','b6','b7'], [0, 2, 3, 4, 6, 8, 10] , ['Alt ♮2'], [neapolitanMajorChords[5]]]
const AltNat3 = [['1','b2','bb3','b4','b5','b6','b7'], [0, 1, 2, 4, 6, 8, 10] , ['Alt ♮2'], [neapolitanMajorChords[6]]]

export const NeapolitanMajor = [NeapolitanMaj, LydianAugSharp6, LydianDomSharp5, LydianMinor, MajorLocrian, AltNat2, AltNat3]


/*
major
Neapolitan Major
0, 2, 4, 5, 7, 9, 11
*/