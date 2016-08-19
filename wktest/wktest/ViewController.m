//
//  ViewController.m
//  wktest
//
//  Created by buji on 2/2/16.
//  Copyright © 2016 hdp. All rights reserved.
//

#import "ViewController.h"
#import "Masonry.h"
@import WebKit;

@interface ViewController ()

@end

@implementation UIView(Masonry_LJC)

- (void) distributeSpacingHorizontallyWith:(NSArray*)views
{
    NSMutableArray* spaces = [NSMutableArray arrayWithCapacity:views.count + 1];
    
    for (int i = 0; i < views.count + 1; i++) {
        UIView* v = [[UIView alloc] init];
        [spaces addObject:v];
        [self addSubview:v];
        
        [v mas_makeConstraints:^(MASConstraintMaker *make) {
            make.width.equalTo(v.mas_height);
        }];
    }
    
    UIView* v0 = spaces[0];
    
    [v0 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.left.equalTo(self.mas_left);
        make.centerY.equalTo(((UIView *)views[0]).mas_centerY);
    }];
    
    UIView* lastSpace = v0;
    for (int i = 0; i < views.count; i++) {
        UIView* obj = views[i];
        UIView* space = spaces[i + 1];
        
        [obj mas_makeConstraints:^(MASConstraintMaker *make) {
            make.left.equalTo(lastSpace.mas_right);
        }];
        
        [space mas_makeConstraints:^(MASConstraintMaker *make) {
            make.left.equalTo(obj.mas_right);
            make.centerY.equalTo(obj.mas_centerY);
            make.width.equalTo(v0);
        }];
        
        lastSpace = space;
    }
    
    [lastSpace mas_makeConstraints:^(MASConstraintMaker *make) {
        make.right.equalTo(self.mas_right);
    }];
}

- (void) distributeSpacingVerticallyWith:(NSArray*)views
{
    NSMutableArray* spaces = [NSMutableArray arrayWithCapacity:views.count + 1];
    
    for (int i = 0; i < views.count + 1; i++) {
        UIView* v = [[UIView alloc] init];
        [spaces addObject:v];
        [self addSubview:v];
        
        [v mas_makeConstraints:^(MASConstraintMaker *make) {
            make.width.equalTo(v.mas_height);
        }];
    }
    
    UIView* v0 = spaces[0];
    
    [v0 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.top.equalTo(self.mas_top);
        make.centerX.equalTo(((UIView*)views[0]).mas_centerX);
    }];
    
    UIView* lastSpace = v0;
    for (int i = 0; i < views.count; i++) {
        UIView* obj = views[i];
        UIView* space = spaces[i + 1];
        
        [obj mas_makeConstraints:^(MASConstraintMaker *make) {
            make.top.equalTo(lastSpace.mas_bottom);
        }];
        
        [space mas_makeConstraints:^(MASConstraintMaker *make) {
            make.top.equalTo(obj.mas_bottom);
            make.centerX.equalTo(obj.mas_centerY);
            make.height.equalTo(v0);
        }];
        
        lastSpace = space;
    }
    
    [lastSpace mas_makeConstraints:^(MASConstraintMaker *make) {
        make.bottom.equalTo(self.mas_bottom);
    }];
}

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.title = @"123";
    
    WKWebViewConfiguration* theConfig = [[WKWebViewConfiguration alloc] init];
    _webview = [[WKWebView alloc] initWithFrame:self.view.frame configuration:theConfig];
    
//    _webview.navigationDelegate = self;
//    NSURL* nsurl = [NSURL URLWithString:@"http://m.mogujie.com"];
    NSString* htmlFilePath = [[NSBundle mainBundle] pathForResource:@"test" ofType:@"html"];
    NSURL* htmlFile = [NSURL fileURLWithPath:htmlFilePath];
    
    [_webview loadFileURL:htmlFile allowingReadAccessToURL:htmlFile];
    
    [self.view addSubview:_webview];
    
    UIView *sv = [[UIView alloc] init];
    sv.backgroundColor = [UIColor blackColor];
    [self.view addSubview:sv];
    
    [sv mas_makeConstraints:^(MASConstraintMaker *make) {
        make.center.equalTo(_webview);
        make.size.mas_equalTo(CGSizeMake(300, 300));
    }];
    
//    UIView* sv1 = [[UIView alloc] init];
//    sv1.backgroundColor = [UIColor redColor];
//    [sv addSubview:sv1];
//    
//    [sv1 mas_makeConstraints:^(MASConstraintMaker *make) {
//        make.edges.equalTo(sv).with.insets(UIEdgeInsetsMake(10, 10, 10, 10));
//    }];
//
//    UIView *sv2 = [[UIView alloc] init];
//    UIView *sv3 = [[UIView alloc] init];
//    
//    sv2.backgroundColor = [UIColor orangeColor];
//    sv3.backgroundColor = [UIColor orangeColor];
//    
//    [sv addSubview:sv2];
//    [sv addSubview:sv3];
//    
//    [sv2 mas_makeConstraints:^(MASConstraintMaker *make) {
//        make.centerY.equalTo(sv);
//        make.left.equalTo(sv).with.offset(10);
//        make.right.equalTo(sv3.mas_left).with.offset(-10);
//        make.height.mas_equalTo(150);
//        make.width.equalTo(sv3);
//    }];
//    
//    [sv3 mas_makeConstraints:^(MASConstraintMaker *make) {
//        make.centerY.equalTo(sv);
//        make.left.equalTo(sv2.mas_right).with.offset(10);
//        make.right.equalTo(sv).with.offset(-10);
//        make.height.mas_equalTo(150);
//    }];
//    
//    UIScrollView* scrollView = [[UIScrollView alloc] init];
//    scrollView.backgroundColor = [UIColor whiteColor];
//    [sv addSubview:scrollView];
//    
//    [scrollView mas_makeConstraints:^(MASConstraintMaker *make) {
//        make.edges.equalTo(sv).with.insets(UIEdgeInsetsMake(5, 5, 5, 5));
//    }];
//    
//    UIView *container = [[UIView alloc] init];
//    container.backgroundColor = [UIColor yellowColor];
//    [scrollView addSubview:container];
//    [container mas_makeConstraints:^(MASConstraintMaker *make) {
//        make.edges.equalTo(scrollView);
//        make.width.equalTo(scrollView);
//    }];
//    
//    int count = 10;
//    UIView *lastView = nil;
//    
//    for (int i = 1; i <= count; i++) {
//        UIView *subv = [[UIView alloc] init];
//        subv.backgroundColor = [UIColor colorWithHue:(arc4random() % 256 / 256.0)
//                                          saturation:(arc4random() % 128 / 256.0) + 0.5
//                                          brightness:(arc4random() % 128 / 256.0) + 0.5
//                                               alpha:1];
//        [container addSubview:subv];
//        
//        [subv mas_makeConstraints:^(MASConstraintMaker *make) {
//            make.left.right.equalTo(container);
//            make.height.mas_equalTo(20 * i);
//            
//            if (lastView) {
//                make.top.mas_equalTo(lastView.mas_bottom);
//            } else {
//                make.top.mas_equalTo(container.mas_top);
//            }
//        }];
//        
//        lastView = subv;
//    }
//    
//    [container mas_makeConstraints:^(MASConstraintMaker *make) {
//        make.bottom.mas_equalTo(lastView.mas_bottom);
//    }];
    
    UIView *sv11 = [[UIView alloc] init];
    UIView *sv12 = [[UIView alloc] init];
    UIView *sv13 = [[UIView alloc] init];
    UIView *sv21 = [[UIView alloc] init];
    UIView *sv31 = [[UIView alloc] init];
    
    sv11.backgroundColor = [UIColor redColor];
    sv12.backgroundColor = [UIColor redColor];
    sv13.backgroundColor = [UIColor redColor];
    sv21.backgroundColor = [UIColor redColor];
    sv31.backgroundColor = [UIColor redColor];
    
    [sv addSubview:sv11];
    [sv addSubview:sv12];
    [sv addSubview:sv13];
    [sv addSubview:sv21];
    [sv addSubview:sv31];
    
    [sv11 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.centerY.equalTo(@[sv12, sv13]);
        make.centerX.equalTo(@[sv21, sv31]);
        make.size.mas_equalTo(CGSizeMake(40, 40));
    }];
    
    [sv12 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.size.mas_equalTo(CGSizeMake(70, 20));
    }];
    
    [sv13 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.size.mas_equalTo(CGSizeMake(50, 50));
    }];
    
    [sv21 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.size.mas_equalTo(CGSizeMake(50, 20));
    }];
    
    [sv31 mas_makeConstraints:^(MASConstraintMaker *make) {
        make.size.mas_equalTo(CGSizeMake(40, 60));
    }];
    
    [sv distributeSpacingHorizontallyWith:@[sv11, sv12, sv13]];
    [sv distributeSpacingVerticallyWith:@[sv11, sv21, sv31]];
    
    
    
    // Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
