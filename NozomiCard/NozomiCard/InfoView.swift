//
//  InfoView.swift
//  NozomiCard
//
//  Created by Nozomi Ishii on 30/01/21.
//

import SwiftUI

struct InfoView: View {
    let text: String
    let fill: Color
    let imageName: String
    let imageColor: Color

    var body: some View {
        RoundedRectangle(cornerRadius: 25.0)
            .fill(fill)
            .frame(height: 50)
            .overlay(HStack {
                Image(systemName: imageName)
                    .foregroundColor(imageColor)
                Text(text)
            })
            .padding()
    }
}

struct InfoView_Previews: PreviewProvider {
    static var previews: some View {
        InfoView(text: "+81 70 4220 0798", fill: Color.white, imageName: "phone.fill", imageColor: Color(red: 0.00, green: 0.38, blue: 0.40, opacity: 1.00)).previewLayout(.sizeThatFits)
    }
}
