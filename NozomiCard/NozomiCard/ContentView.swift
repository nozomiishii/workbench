//
//  ContentView.swift
//  NozomiCard
//
//  Created by Nozomi Ishii on 30/01/21.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        ZStack {
            Color(red: 0.00, green: 0.38, blue: 0.40, opacity: 1.00)
                .edgesIgnoringSafeArea(.all)
            VStack {
                Text("Nozomi Ishii")
                    .font(.largeTitle)
                    .bold()
                    .foregroundColor(.white)
                Text("iOS Developer")
                    .foregroundColor(.white)
                    .font(.system(size: 25))
                Divider()
                InfoView(text: "+81 70 4220 0798", fill: Color.white, imageName: "phone.fill", imageColor: Color(red: 0.00, green: 0.38, blue: 0.40, opacity: 1.00))
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

