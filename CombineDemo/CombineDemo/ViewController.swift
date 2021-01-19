//
//  ViewController.swift
//  CombineDemo
//
//  Created by Nozomi Ishii on 19/01/21.
//

import UIKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        let notification = Notification.Name("Hey")

        let publisher = NotificationCenter.default.publisher(for: notification, object: nil)
        let subscription = publisher.sink { _ in
            print("received")
        }

        NotificationCenter.default.post(name: notification, object: nil)
    }
}
