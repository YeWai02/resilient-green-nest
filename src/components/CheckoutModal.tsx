
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Gift, Check } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  reward: {
    name: string;
    points: number;
  } | null;
  userPoints: number;
}

const CheckoutModal = ({ isOpen, onClose, reward, userPoints }: CheckoutModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  if (!reward) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
    console.log('Checkout submitted:', { reward, formData });
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: ''
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-green-500" />
            {step === 1 ? 'Checkout' : 'Order Confirmed'}
          </DialogTitle>
        </DialogHeader>

        {step === 1 ? (
          <div className="space-y-6">
            {/* Reward Summary */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{reward.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Cost:</span>
                  <span className="font-bold text-green-600">{reward.points.toLocaleString()} points</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-gray-600">Your Balance:</span>
                  <span className="font-bold text-blue-600">{userPoints.toLocaleString()} points</span>
                </div>
                <div className="flex justify-between items-center mt-1 pt-2 border-t">
                  <span className="text-sm text-gray-600">Remaining:</span>
                  <span className="font-bold text-gray-900">{(userPoints - reward.points).toLocaleString()} points</span>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="address">Delivery Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="button" variant="outline" onClick={handleClose} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1 bg-gradient-to-r from-green-500 to-blue-500">
                  Confirm Order
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-6 py-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Confirmed!</h3>
              <p className="text-gray-600">
                Your {reward.name} will be delivered to your address within 7-10 business days.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Order confirmation has been sent to {formData.email}
              </p>
            </div>
            <Button onClick={handleClose} className="w-full">
              Continue Earning Points
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
